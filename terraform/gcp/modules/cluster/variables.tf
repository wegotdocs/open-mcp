variable "project_id" {
  description = "GCP project to create the cluster in."
  type        = string
}

variable "region" {
  description = "GCP region of the cluster and its subnet."
  type        = string
}

variable "cluster_name" {
  description = "Name of the GKE Autopilot cluster (also used for the VPC and subnet)."
  type        = string
}

variable "release_channel" {
  description = "GKE release channel: RAPID, REGULAR or STABLE."
  type        = string
  default     = "REGULAR"

  validation {
    condition     = contains(["RAPID", "REGULAR", "STABLE"], var.release_channel)
    error_message = "release_channel must be RAPID, REGULAR or STABLE."
  }
}

variable "subnet_cidr" {
  description = "Primary CIDR range of the cluster subnet (node IPs). GKE adds the pod and service ranges itself."
  type        = string
  default     = "10.0.0.0/20"
}
