locals {
  hostnames = {
    web       = "web.${var.domain}"
    auth      = "auth.${var.domain}"
    server    = "server.${var.domain}"
    inspector = "inspector.${var.domain}"
  }
}

resource "google_project_service" "this" {
  for_each = toset(concat(
    var.vault_auto_unseal ? ["cloudkms.googleapis.com"] : [],
    var.dns_zone_name != null ? ["dns.googleapis.com"] : [],
  ))

  project            = var.project_id
  service            = each.value
  disable_on_destroy = false
}

# -----------------------------------------------------------------------------
# Address: a reserved global IP for the load balancer the GKE Ingress
# controller creates. Being reserved, it's known before the load balancer
# exists and survives it being recreated, so DNS can point at it from the start.
# -----------------------------------------------------------------------------

resource "google_compute_global_address" "ingress" {
  project = var.project_id
  name    = "${var.cluster_name}-ingress"
}

# -----------------------------------------------------------------------------
# TLS: one Google-managed certificate for the four BoltMCP hostnames, attached
# to the load balancer by name (pre-shared-cert Ingress annotation). Google
# validates it through the load balancer, so it's issued once every hostname
# resolves to the address above, and renews it automatically.
#
# Certificates are immutable: the name changes with the domains, and the new
# one is created before the old one is detached.
# -----------------------------------------------------------------------------

resource "random_id" "certificate" {
  byte_length = 3

  keepers = {
    domains = join(",", values(local.hostnames))
  }
}

resource "google_compute_managed_ssl_certificate" "this" {
  project = var.project_id
  name    = "${var.cluster_name}-${random_id.certificate.hex}"

  managed {
    domains = values(local.hostnames)
  }

  lifecycle {
    create_before_destroy = true
  }
}

# -----------------------------------------------------------------------------
# DNS (optional): A records in a Cloud DNS zone. With any other DNS provider,
# the records are created by hand from the dns_records output.
# -----------------------------------------------------------------------------

data "google_dns_managed_zone" "this" {
  count = var.dns_zone_name != null ? 1 : 0

  project = var.project_id
  name    = var.dns_zone_name

  depends_on = [google_project_service.this]
}

resource "google_dns_record_set" "this" {
  for_each = var.dns_zone_name != null ? local.hostnames : {}

  project      = var.project_id
  managed_zone = data.google_dns_managed_zone.this[0].name
  name         = "${each.value}."
  type         = "A"
  ttl          = 300
  rrdatas      = [google_compute_global_address.ingress.address]
}

# -----------------------------------------------------------------------------
# Load balancer backends: one BackendConfig per public Service, installed with
# the chart (extraObjects) and attached through the Service annotation.
#
# Google's health checks only accept a 200, so each one probes a path that
# returns 200 on the serving port. Keycloak's own probes are on its management
# port and its root redirects, so its check uses the master realm endpoint.
# -----------------------------------------------------------------------------

locals {
  backends = {
    web          = { name = "web", path = "/api/health/readiness", port = 3000 }
    keycloak     = { name = "keycloak", path = "/realms/master", port = 8080 }
    mcpServer    = { name = "mcp-server", path = "/health", port = 3001 }
    mcpInspector = { name = "mcp-inspector", path = "/", port = 6274 }
  }

  backend_config_names = { for component, b in local.backends : component => "${var.release_name}-${b.name}" }
}

# -----------------------------------------------------------------------------
# Vault auto-unseal: Vault decrypts its root key with this KMS key on every
# start, so it never needs unsealing by hand. The key is granted directly to the
# chart's Vault ServiceAccount (<release>-vault) through Workload Identity, so
# the chart needs no ServiceAccount annotation.
#
# KMS key rings can never be deleted, so the name carries a random suffix: a
# later apply after `terraform destroy` creates a fresh one instead of
# colliding with the old one.
# -----------------------------------------------------------------------------

data "google_project" "this" {
  count = var.vault_auto_unseal ? 1 : 0

  project_id = var.project_id
}

resource "random_id" "key_ring" {
  count = var.vault_auto_unseal ? 1 : 0

  byte_length = 3
}

resource "google_kms_key_ring" "vault" {
  count = var.vault_auto_unseal ? 1 : 0

  project  = var.project_id
  name     = "${var.cluster_name}-vault-${random_id.key_ring[0].hex}"
  location = var.region

  depends_on = [google_project_service.this]
}

resource "google_kms_crypto_key" "vault_unseal" {
  count = var.vault_auto_unseal ? 1 : 0

  name            = "vault-unseal"
  key_ring        = google_kms_key_ring.vault[0].id
  rotation_period = "7776000s" # 90 days
}

locals {
  vault_principal = var.vault_auto_unseal ? "principal://iam.googleapis.com/projects/${data.google_project.this[0].number}/locations/global/workloadIdentityPools/${var.project_id}.svc.id.goog/subject/ns/${var.namespace}/sa/${var.release_name}-vault" : null
}

resource "google_kms_crypto_key_iam_member" "vault_unseal" {
  for_each = var.vault_auto_unseal ? toset(["roles/cloudkms.cryptoKeyEncrypterDecrypter", "roles/cloudkms.viewer"]) : toset([])

  crypto_key_id = google_kms_crypto_key.vault_unseal[0].id
  role          = each.value
  member        = local.vault_principal
}
