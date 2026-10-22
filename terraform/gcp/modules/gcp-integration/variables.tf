variable "project_id" {
  description = "GCP project of the cluster."
  type        = string
}

variable "region" {
  description = "GCP region of the cluster. The Vault KMS key ring is created here."
  type        = string
}

variable "cluster_name" {
  description = "Name of the GKE cluster. Prefixes the names of the resources this module creates."
  type        = string
}

variable "domain" {
  description = "BoltMCP apex domain (Helm value global.domain)."
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

variable "dns_zone_name" {
  description = "Name of a Cloud DNS managed zone (in project_id) that contains domain. When set, the BoltMCP A records are created in it. When null, create them at your DNS provider from the dns_records output."
  type        = string
  default     = null
}

variable "vault_auto_unseal" {
  description = "Create the KMS key and Workload Identity binding for Vault auto-unseal."
  type        = bool
  default     = true
}

variable "backend_timeout_seconds" {
  description = "How long the load balancer waits for a backend to respond to a request."
  type        = number
  default     = 300
}
