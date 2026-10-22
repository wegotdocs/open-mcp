locals {
  registry_key_path = coalesce(var.registry_key_path, "${path.root}/../../keys/boltmcp-key.json")
}

# 1. Network + EKS Auto Mode cluster
module "cluster" {
  source = "./modules/cluster"

  cluster_name       = var.cluster_name
  kubernetes_version = var.kubernetes_version
  create_vpc         = var.create_vpc
  vpc_cidr           = var.vpc_cidr
  single_nat_gateway = var.single_nat_gateway
  vpc_id             = var.vpc_id
  private_subnet_ids = var.private_subnet_ids
}

# 2. AWS integrations: storage, TLS certificate, ingress class, DNS, Vault seal
module "aws_integration" {
  source = "./modules/aws-integration"

  cluster_name      = module.cluster.cluster_name
  region            = var.region
  domain            = var.domain
  route53_zone_name = var.route53_zone_name
  namespace         = var.namespace
  release_name      = var.release_name
  vault_auto_unseal = var.vault_auto_unseal
}

# On destroy, the release (and its Ingress and database volume) is removed
# first, but the load balancer, its DNS records and the EBS volume are cleaned
# up asynchronously by controllers. This pause keeps them working long enough
# to finish, so nothing is orphaned and the VPC can be deleted.
#
# It depends on the whole cluster module, not just the outputs the providers
# use: otherwise Terraform tears down the cluster's IAM policies, NAT gateway
# and routes in parallel with the release, and the controllers lose the
# permissions and network access they need to clean up.
resource "time_sleep" "controller_cleanup" {
  destroy_duration = "120s"

  depends_on = [module.cluster, module.aws_integration]
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

  storage_class_name = module.aws_integration.storage_class_name
  ingress_class_name = module.aws_integration.ingress_class_name
  ingress_annotations = {
    "alb.ingress.kubernetes.io/scheme"                   = "internet-facing"
    "alb.ingress.kubernetes.io/target-type"              = "ip"
    "alb.ingress.kubernetes.io/listen-ports"             = jsonencode([{ HTTP = 80 }, { HTTPS = 443 }])
    "alb.ingress.kubernetes.io/ssl-redirect"             = "443"
    "alb.ingress.kubernetes.io/certificate-arn"          = module.aws_integration.certificate_arn
    "alb.ingress.kubernetes.io/load-balancer-attributes" = "idle_timeout.timeout_seconds=${var.alb_idle_timeout_seconds}"
    # The health check probes `/` on every service. Keycloak and the web app
    # answer it with a redirect and the MCP server with a 404, all of which
    # mean the pod is up.
    "alb.ingress.kubernetes.io/success-codes" = "200-399,404"
  }
  vault_seal  = module.aws_integration.vault_seal
  helm_values = var.helm_values

  depends_on = [time_sleep.controller_cleanup]
}
