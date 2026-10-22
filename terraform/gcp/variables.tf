# -----------------------------------------------------------------------------
# Required
# -----------------------------------------------------------------------------

variable "project_id" {
  description = "ID of the GCP project to deploy into. The stack enables the APIs it needs."
  type        = string
}

variable "region" {
  description = "GCP region to deploy into, e.g. europe-west2."
  type        = string
}

variable "domain" {
  description = "Apex domain for BoltMCP (Helm value global.domain). The chart serves web.<domain>, auth.<domain>, server.<domain> and inspector.<domain>. Recommended: the `boltmcp` subdomain of your company's domain, e.g. boltmcp.example.com."
  type        = string
}

variable "admin_email" {
  description = "Email address of the first BoltMCP admin user (Helm value oidc.adminUser.email). Must be a real address."
  type        = string
}

# -----------------------------------------------------------------------------
# DNS
# -----------------------------------------------------------------------------

variable "dns_zone_name" {
  description = "Name (not DNS name) of a Cloud DNS managed zone in project_id that contains domain, e.g. example-com. When set, Terraform creates the BoltMCP A records in it. Leave null to create them at your DNS provider from the dns_records output."
  type        = string
  default     = null
}

# -----------------------------------------------------------------------------
# BoltMCP release
# -----------------------------------------------------------------------------

variable "chart_version" {
  description = "BoltMCP Helm chart version. Use the latest release you've been given. Changing it upgrades the release."
  type        = string
  default     = "0.5.23"
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
# Vault
# -----------------------------------------------------------------------------

variable "vault_auto_unseal" {
  description = "Auto-unseal the bundled Vault with a Cloud KMS key. When false, Vault uses Shamir keys and must be unsealed by hand after every restart."
  type        = bool
  default     = true
}

# -----------------------------------------------------------------------------
# Cluster and network
# -----------------------------------------------------------------------------

variable "cluster_name" {
  description = "Name of the GKE Autopilot cluster. Also names the VPC, subnet, IP address, certificate and KMS key ring."
  type        = string
  default     = "boltmcp"
}

variable "release_channel" {
  description = "GKE release channel (RAPID, REGULAR or STABLE). GKE picks and upgrades the Kubernetes version within it."
  type        = string
  default     = "REGULAR"
}

variable "subnet_cidr" {
  description = "Primary CIDR range of the cluster subnet (node IPs)."
  type        = string
  default     = "10.0.0.0/20"
}

variable "labels" {
  description = "Labels applied to every GCP resource this stack creates that supports them."
  type        = map(string)
  default     = {}
}
