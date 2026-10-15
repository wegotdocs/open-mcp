variable "cluster_name" {
  description = "Name of the EKS Auto Mode cluster."
  type        = string
}

variable "region" {
  description = "AWS region of the cluster."
  type        = string
}

variable "domain" {
  description = "BoltMCP apex domain (Helm value global.domain)."
  type        = string
}

variable "route53_zone_name" {
  description = "Public Route 53 hosted zone containing the domain."
  type        = string
}

variable "namespace" {
  description = "Namespace BoltMCP is installed into."
  type        = string
}

variable "release_name" {
  description = "BoltMCP Helm release name. The chart names the Vault ServiceAccount <release_name>-vault."
  type        = string
}

variable "vault_auto_unseal" {
  description = "Create the KMS key and Pod Identity for Vault auto-unseal."
  type        = bool
  default     = true
}

variable "external_dns_chart_version" {
  description = "Version of the external-dns Helm chart."
  type        = string
  default     = "1.23.0"
}
