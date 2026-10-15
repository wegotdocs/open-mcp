# The three user-managed Secrets the BoltMCP chart reads at runtime, with a
# random value for every key. Same keys as the manual install's
# create-secrets.sh. Values are alphanumeric so vault-password stays URL-safe.
#
# These values are stored in Terraform state: keep the state somewhere
# encrypted and access-controlled.
locals {
  secret_keys = {
    # boltmcp-database
    database = [
      "superuser-password",
      "migrate-core-password",
      "web-password",
      "rest-api-password",
      "mcp-server-password",
      "keycloak-password",
      "vault-password",
    ]
    # boltmcp-oidc
    oidc = [
      "web-client-secret",
      "mcp-server-client-secret",
      "rest-api-to-keycloak-client-secret",
      "keycloak-reconcile-client-secret",
    ]
    # boltmcp-auth
    auth = [
      "web-auth-secret",
      "keycloak-admin-password",
      "boltmcp-admin-password",
      "mcp-inspector-api-token",
      "mcp-server-upstream-oauth-secret",
    ]
  }
}

resource "random_password" "secret" {
  for_each = toset(flatten([
    for secret, keys in local.secret_keys : [for key in keys : "${secret}/${key}"]
  ]))

  length  = 64
  special = false
}

resource "kubernetes_secret_v1" "app" {
  for_each = local.secret_keys

  metadata {
    name      = "${var.release_name}-${each.key}"
    namespace = kubernetes_namespace_v1.boltmcp.metadata[0].name
  }

  data = {
    for key in each.value : key => random_password.secret["${each.key}/${key}"].result
  }
}
