resource "kubernetes_namespace_v1" "boltmcp" {
  metadata {
    name = var.namespace
  }
}

# The access key is a Docker registry config file, so it's the pull secret's
# content as-is. The chart references it by name via global.imagePullSecrets.
resource "kubernetes_secret_v1" "pull" {
  metadata {
    name      = "boltmcp-pull-secret"
    namespace = kubernetes_namespace_v1.boltmcp.metadata[0].name
  }

  type = "kubernetes.io/dockerconfigjson"

  data = {
    ".dockerconfigjson" = file(var.registry_key_path)
  }
}

locals {
  registry_host = "europe-west2-docker.pkg.dev"

  # The helm provider's registry_config_path isn't applied to OCI chart pulls,
  # so log in with the credentials from the key's Docker config instead. An
  # `auth` entry is base64("<username>:<password>"), and the password (a JSON
  # service account key) can itself contain colons.
  registry_auth = jsondecode(file(var.registry_key_path)).auths[local.registry_host]
  registry_credentials = try(
    { username = local.registry_auth.username, password = local.registry_auth.password },
    zipmap(["username", "password"], regex("^([^:]*):((?s).*)$", base64decode(local.registry_auth.auth))),
  )

  values = {
    global = {
      domain       = var.domain
      tls          = { enabled = true }
      storageClass = var.storage_class_name
    }
    oidc = {
      adminUser = { email = var.admin_email }
    }
    ingress = {
      enabled     = true
      className   = var.ingress_class_name
      annotations = var.ingress_annotations
    }
    # Omitted when null, leaving the chart's default Shamir seal.
    vault = { for k, v in { seal = var.vault_seal } : k => v if v != null }
  }
}

resource "helm_release" "boltmcp" {
  name                = var.release_name
  repository          = "oci://${local.registry_host}/boltmcp-platform/boltmcp-alpha/charts"
  repository_username = local.registry_credentials.username
  repository_password = local.registry_credentials.password
  chart               = "boltmcp"
  version             = var.chart_version
  namespace           = kubernetes_namespace_v1.boltmcp.metadata[0].name

  # Helm deep-merges these in order, so helm_values overrides the generated
  # values key by key.
  values = [
    yamlencode(local.values),
    yamlencode(var.helm_values),
  ]

  # Never wait for resources: the post-install hook Jobs (migrations,
  # Keycloak reconcile) must run before the app pods can become ready.
  # Same as the manual install, which must not pass --wait.
  wait = false
  # The hook Jobs are still waited for. On a fresh EKS Auto Mode cluster the
  # first nodes take a few minutes to appear.
  timeout = 900

  depends_on = [kubernetes_secret_v1.app, kubernetes_secret_v1.pull]
}
