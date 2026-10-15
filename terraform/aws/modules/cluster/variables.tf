variable "cluster_name" {
  description = "Name of the EKS cluster (also used for the VPC)."
  type        = string
}

variable "kubernetes_version" {
  description = "Kubernetes version. Null uses the EKS default."
  type        = string
  default     = null
}

variable "create_vpc" {
  description = "Create a dedicated VPC. When false, vpc_id and private_subnet_ids are required."
  type        = bool
  default     = true
}

variable "vpc_cidr" {
  description = "CIDR block of the created VPC."
  type        = string
  default     = "10.0.0.0/16"
}

variable "single_nat_gateway" {
  description = "One shared NAT gateway (true) or one per availability zone (false)."
  type        = bool
  default     = true
}

variable "vpc_id" {
  description = "Existing VPC ID, when create_vpc is false."
  type        = string
  default     = null

  validation {
    condition     = var.create_vpc || var.vpc_id != null
    error_message = "vpc_id is required when create_vpc is false."
  }
}

variable "private_subnet_ids" {
  description = "Existing private subnet IDs for the cluster, when create_vpc is false."
  type        = list(string)
  default     = []

  validation {
    condition     = var.create_vpc || length(var.private_subnet_ids) >= 2
    error_message = "At least two private_subnet_ids (in different availability zones) are required when create_vpc is false."
  }
}
