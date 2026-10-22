output "web_url" {
  description = "BoltMCP dashboard."
  value       = "https://web.${var.domain}"
}

output "auth_url" {
  description = "Keycloak."
  value       = "https://auth.${var.domain}"
}

output "server_url" {
  description = "Base URL of your MCP servers."
  value       = "https://server.${var.domain}"
}

output "load_balancer_ip" {
  description = "Reserved IP address of the load balancer. Every BoltMCP hostname must resolve to it."
  value       = module.gcp_integration.ip_address
}

output "dns_records" {
  description = "The A records to create at your DNS provider (empty when they were created in Cloud DNS)."
  value       = module.gcp_integration.dns_records_created ? [] : module.gcp_integration.dns_records
}

output "kubeconfig_command" {
  description = "Points kubectl at the new cluster."
  value       = "gcloud container clusters get-credentials ${module.cluster.cluster_name} --region ${var.region} --project ${var.project_id}"
}

locals {
  dns_step = module.gcp_integration.dns_records_created ? "The A records were created in Cloud DNS zone ${var.dns_zone_name}." : <<-EOT
    At your DNS provider, create these A records (or one wildcard A record for *.${var.domain}):
    %{for r in module.gcp_integration.dns_records~}
         ${r.name}  A  ${r.value}
    %{endfor~}
  EOT
}

output "next_steps" {
  description = "What to do after the first apply."
  value       = <<-EOT
    1. Point kubectl at the cluster:
         gcloud container clusters get-credentials ${module.cluster.cluster_name} --region ${var.region} --project ${var.project_id}

    2. Point DNS at the load balancer.
       ${trimspace(local.dns_step)}

       Google issues the TLS certificate once all four hostnames resolve to ${module.gcp_integration.ip_address},
       usually 15-60 minutes later. Until then HTTPS fails and BoltMCP can't sign in. Check its status with:
         gcloud compute ssl-certificates describe ${module.gcp_integration.certificate_name} --global --project ${var.project_id} --format='value(managed.status)'
       (ACTIVE when it's ready).

    3. Wait until every pod is Running or Completed:
         kubectl get pods -n ${var.namespace} -w

    4. Initialize Vault once and store the output somewhere safe:
         kubectl exec -it -n ${var.namespace} deploy/${var.release_name}-vault -- vault operator init
       ${var.vault_auto_unseal ? "Vault unseals itself with Cloud KMS, so init prints recovery keys and there is no unseal step." : "Then unseal it by running this three times, once per unseal key:\n         kubectl exec -it -n ${var.namespace} deploy/${var.release_name}-vault -- vault operator unseal"}

    5. Run the Vault bootstrap with the root token from step 4:
         kubectl exec -it -n ${var.namespace} deploy/${var.release_name}-vault -- \
           sh -c 'vault login <root-token> && sh /bootstrap/vault-bootstrap.sh'

    6. Once the certificate is ACTIVE, get your login details (from the repository root):
         bash scripts/deny/get-login-details.sh
       then sign in at https://web.${var.domain}
  EOT
}

output "helm_values" {
  description = "The values this stack passes to the BoltMCP chart, for reference or for switching to a manual `helm upgrade`."
  value       = module.release.values_yaml
}
