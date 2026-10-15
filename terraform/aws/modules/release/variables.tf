variable "namespace" {
  description = "Namespace to install BoltMCP into (created by this module)."
  type        = string
}

variable "release_name" {
  description = "Helm release name. Also prefixes the application Secret names."
  type        = string
}

variable "chart_version" {
  description = "BoltMCP Helm chart version."
  type        = string
}

variable "registry_key_path" {
  description = "Path to the BoltMCP access key file (a Docker registry config)."
  type        = string
}

variable "domain" {
  description = "Helm value global.domain."
  type        = string
}

variable "admin_email" {
  description = "Helm value oidc.adminUser.email."
  type        = string
}

variable "storage_class_name" {
  description = "Helm value global.storageClass."
  type        = string
}

variable "ingress_class_name" {
  description = "Helm value ingress.className."
  type        = string
}

variable "ingress_annotations" {
  description = "Helm value ingress.annotations."
  type        = map(string)
  default     = {}
}

variable "vault_seal" {
  description = "Helm value vault.seal, or null for the default Shamir seal."
  type        = any
  default     = null
}

variable "helm_values" {
  description = "Extra Helm values, deep-merged over the generated ones."
  type        = any
  default     = {}
}
