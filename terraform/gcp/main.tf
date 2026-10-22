locals {
  registry_key_path = coalesce(var.registry_key_path, "${path.root}/../../keys/boltmcp-key.json")
}

# 1. Network + GKE Autopilot cluster
module "cluster" {
  source = "./modules/cluster"

  project_id      = var.project_id
  region          = var.region
  cluster_name    = var.cluster_name
  release_channel = var.release_channel
  subnet_cidr     = var.subnet_cidr
}

# 2. GCP integrations: static IP, TLS certificate, DNS, load balancer backends,
# Vault seal
module "gcp_integration" {
  source = "./modules/gcp-integration"

  project_id        = var.project_id
  region            = var.region
  cluster_name      = module.cluster.cluster_name
  domain            = var.domain
  namespace         = var.namespace
  release_name      = var.release_name
  dns_zone_name     = var.dns_zone_name
  vault_auto_unseal = var.vault_auto_unseal
}

# On destroy, the release (and its Ingress and database volume) is removed
# first, but the load balancer, its network endpoint groups and firewall rules
# and the Persistent Disk are cleaned up asynchronously by GKE's controllers.
# This pause keeps the cluster running long enough for them to finish, so
# nothing is orphaned and the VPC, address and certificate can be deleted.
resource "time_sleep" "controller_cleanup" {
  destroy_duration = "120s"

  depends_on = [module.cluster, module.gcp_integration]
}

# 3. BoltMCP: namespace, Secrets and the Helm release
module "release" {
  source = "../modules/release"

  namespace         = var.namespace
  release_name      = var.release_name
  chart_version     = var.chart_version
  registry_key_path = local.registry_key_path
  domain            = var.domain
  admin_email       = var.admin_email

  storage_class_name = module.gcp_integration.storage_class_name
  # GKE's Ingress controller is selected by the class annotation below, not by
  # spec.ingressClassName.
  ingress_class_name = ""
  ingress_annotations = {
    "kubernetes.io/ingress.class"                 = "gce"
    "kubernetes.io/ingress.global-static-ip-name" = module.gcp_integration.ip_name
    "ingress.gcp.kubernetes.io/pre-shared-cert"   = module.gcp_integration.certificate_name
    # HTTPS only: no port 80 forwarding rule.
    "kubernetes.io/ingress.allow-http" = "false"
  }
  # The certificate is attached by annotation, so the Ingress has no tls block.
  ingress_tls_secret_name = ""
  service_annotations     = module.gcp_integration.service_annotations
  extra_objects           = module.gcp_integration.extra_objects
  vault_seal              = module.gcp_integration.vault_seal
  helm_values             = var.helm_values

  depends_on = [time_sleep.controller_cleanup]
}

# When the certificate is replaced (the domain changed), GKE's Ingress
# controller moves the load balancer to the new one asynchronously, typically
# within a minute of the release update. The old certificate can only be
# deleted once it's detached, and Terraform deletes it only after everything
# that depends on it has been applied, so this pause (which depends on the
# certificate name) holds the deletion back until the switch is done.
resource "time_sleep" "certificate_handover" {
  create_duration = "180s"

  triggers = {
    certificate = module.gcp_integration.certificate_name
  }

  depends_on = [module.release]
}
