output "storage_class_name" {
  description = "StorageClass for the bundled database volume (balanced Persistent Disk, built into GKE)."
  value       = "standard-rwo"
}

output "ip_address" {
  description = "Reserved global IP address of the load balancer."
  value       = google_compute_global_address.ingress.address
}

output "ip_name" {
  description = "Name of the reserved global address, for the Ingress annotation."
  value       = google_compute_global_address.ingress.name
}

output "certificate_name" {
  description = "Name of the Google-managed certificate, for the Ingress annotation."
  value       = google_compute_managed_ssl_certificate.this.name
}

output "dns_records" {
  description = "The A records BoltMCP needs. Created in Cloud DNS when dns_zone_name is set."
  value       = [for h in values(local.hostnames) : { name = h, type = "A", value = google_compute_global_address.ingress.address }]
}

output "dns_records_created" {
  description = "Whether the A records were created in Cloud DNS."
  value       = var.dns_zone_name != null
}

output "service_annotations" {
  description = "Service annotations attaching each BackendConfig (Helm values <component>.service.annotations)."
  value = {
    for component, name in local.backend_config_names : component => {
      "cloud.google.com/backend-config" = jsonencode({ default = name })
    }
  }
}

output "extra_objects" {
  description = "The BackendConfigs, installed with the chart (Helm value extraObjects)."
  value = [
    for component, b in local.backends : {
      apiVersion = "cloud.google.com/v1"
      kind       = "BackendConfig"
      metadata   = { name = local.backend_config_names[component] }
      spec = {
        timeoutSec = var.backend_timeout_seconds
        healthCheck = {
          type        = "HTTP"
          requestPath = b.path
          port        = b.port
        }
      }
    }
  ]
}

output "vault_seal" {
  description = "Value for the chart's vault.seal (null when auto-unseal is off)."
  value = var.vault_auto_unseal ? {
    type = "gcpckms"
    config = {
      project    = var.project_id
      region     = var.region
      key_ring   = google_kms_key_ring.vault[0].name
      crypto_key = google_kms_crypto_key.vault_unseal[0].name
    }
  } : null

  # Vault must not start before it's allowed to use the key.
  depends_on = [google_kms_crypto_key_iam_member.vault_unseal]
}
