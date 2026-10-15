# -----------------------------------------------------------------------------
# Required
# -----------------------------------------------------------------------------

variable "region" {
  description = "AWS region to deploy into, e.g. eu-west-2."
  type        = string
}

variable "domain" {
  description = "Apex domain for BoltMCP (Helm value global.domain). The chart serves web.<domain>, auth.<domain>, server.<domain> and inspector.<domain>. Recommended: the `boltmcp` subdomain of your company's domain, e.g. boltmcp.example.com."
  type        = string
}

variable "route53_zone_name" {
  description = "Name of the public Route 53 hosted zone (in this AWS account) that contains `domain`, e.g. example.com. Used for ACM certificate validation and the BoltMCP DNS records."
  type        = string
}

variable "admin_email" {
  description = "Email address of the first BoltMCP admin user (Helm value oidc.adminUser.email). Must be a real address."
  type        = string
}

# -----------------------------------------------------------------------------
# BoltMCP release
# -----------------------------------------------------------------------------

variable "chart_version" {
  description = "BoltMCP Helm chart version. Use the latest release you've been given. Changing it upgrades the release."
  type        = string
  default     = "0.5.12"
}

variable "registry_key_path" {
  description = "Path to your BoltMCP access key file. Defaults to keys/boltmcp-key.json in the root of this repository."
  type        = string
  default     = null
}

variable "release_name" {
  description = "Helm release name. Also prefixes the application Secret names and the Vault ServiceAccount."
  type        = string
  default     = "boltmcp"
}

variable "namespace" {
  description = "Kubernetes namespace BoltMCP is installed into."
  type        = string
  default     = "boltmcp"
}

variable "helm_values" {
  description = "Extra Helm values for the BoltMCP chart, deep-merged over the values this stack generates. See the configuration reference."
  type        = any
  default     = {}
}

# -----------------------------------------------------------------------------
# Ingress, TLS and Vault
# -----------------------------------------------------------------------------

variable "vault_auto_unseal" {
  description = "Auto-unseal the bundled Vault with an AWS KMS key. When false, Vault uses Shamir keys and must be unsealed by hand after every restart."
  type        = bool
  default     = true
}

variable "alb_idle_timeout_seconds" {
  description = "Idle timeout of the Application Load Balancer. Long-lived MCP streams with no traffic for longer than this are closed."
  type        = number
  default     = 300
}

# -----------------------------------------------------------------------------
# Cluster and network
# -----------------------------------------------------------------------------

variable "cluster_name" {
  description = "Name of the EKS cluster."
  type        = string
  default     = "boltmcp"
}

variable "kubernetes_version" {
  description = "Kubernetes version of the EKS cluster (v1.28+). Defaults to the EKS default version at creation time."
  type        = string
  default     = null
}

variable "create_vpc" {
  description = "Create a dedicated VPC. Set to false and provide vpc_id and private_subnet_ids to use an existing one."
  type        = bool
  default     = true
}

variable "vpc_cidr" {
  description = "CIDR block of the VPC created when create_vpc is true."
  type        = string
  default     = "10.0.0.0/16"
}

variable "single_nat_gateway" {
  description = "Use a single NAT gateway for the created VPC (cheaper). Set to false for one NAT gateway per availability zone (highly available)."
  type        = bool
  default     = true
}

variable "vpc_id" {
  description = "Existing VPC ID. Only used when create_vpc is false. Its public subnets must be tagged kubernetes.io/role/elb=1 so the load balancer can find them."
  type        = string
  default     = null
}

variable "private_subnet_ids" {
  description = "Existing private subnet IDs for the cluster nodes, tagged kubernetes.io/role/internal-elb=1. Only used when create_vpc is false."
  type        = list(string)
  default     = []
}

variable "tags" {
  description = "Tags applied to every AWS resource this stack creates."
  type        = map(string)
  default     = {}
}
