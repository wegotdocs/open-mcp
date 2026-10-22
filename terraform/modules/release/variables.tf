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
  description = "Helm value ingress.className. Empty omits spec.ingressClassName."
  type        = string
  default     = ""
}

variable "ingress_annotations" {
  description = "Helm value ingress.annotations."
  type        = map(string)
  default     = {}
}

variable "ingress_tls_secret_name" {
  description = "Helm value ingress.tls.secretName, or null for the chart default. Empty drops the Ingress tls block, for load balancers that attach the certificate by annotation."
  type        = string
  default     = null
}

variable "service_annotations" {
  description = "Service annotations per chart component (Helm values <component>.service.annotations)."
  type        = map(map(string))
  default     = {}

  validation {
    condition     = alltrue([for k in keys(var.service_annotations) : contains(["web", "keycloak", "mcpServer", "restApi", "mcpInspector"], k)])
    error_message = "service_annotations keys must be chart components: web, keycloak, mcpServer, restApi or mcpInspector."
  }
}

variable "extra_objects" {
  description = "Extra manifests installed with the chart (Helm value extraObjects)."
  type        = any
  default     = []
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
