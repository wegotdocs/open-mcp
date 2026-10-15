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

output "kubeconfig_command" {
  description = "Points kubectl at the new cluster."
  value       = "aws eks update-kubeconfig --name ${module.cluster.cluster_name} --region ${var.region}"
}

output "next_steps" {
  description = "What to do after the first apply."
  value       = <<-EOT
    1. Point kubectl at the cluster:
         aws eks update-kubeconfig --name ${module.cluster.cluster_name} --region ${var.region}

    2. Wait until every pod is Running or Completed:
         kubectl get pods -n ${var.namespace} -w

    3. Initialize Vault once and store the output somewhere safe:
         kubectl exec -it -n ${var.namespace} deploy/${var.release_name}-vault -- vault operator init
       ${var.vault_auto_unseal ? "Vault unseals itself with AWS KMS, so init prints recovery keys and there is no unseal step." : "Then unseal it by running this three times, once per unseal key:\n         kubectl exec -it -n ${var.namespace} deploy/${var.release_name}-vault -- vault operator unseal"}

    4. Run the Vault bootstrap with the root token from step 3:
         kubectl exec -it -n ${var.namespace} deploy/${var.release_name}-vault -- \
           sh -c 'vault login <root-token> && sh /bootstrap/vault-bootstrap.sh'

    5. Get your login details (from the repository root):
         bash scripts/deny/get-login-details.sh
       then sign in at https://web.${var.domain}
       (DNS records can take a few minutes to appear after the first apply).
  EOT
}

output "helm_values" {
  description = "The values this stack passes to the BoltMCP chart, for reference or for switching to a manual `helm upgrade`."
  value       = module.release.values_yaml
}
