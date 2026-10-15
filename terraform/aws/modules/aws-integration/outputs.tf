output "storage_class_name" {
  description = "StorageClass for the bundled database volume."
  value       = kubernetes_storage_class_v1.gp3.metadata[0].name
}

output "ingress_class_name" {
  description = "IngressClass of the EKS Auto Mode load balancer controller."
  value       = kubernetes_ingress_class_v1.alb.metadata[0].name
}

output "certificate_arn" {
  description = "ARN of the validated wildcard certificate for the BoltMCP hostnames."
  # Taken from the validation resource so consumers wait until it's issued.
  value = aws_acm_certificate_validation.this.certificate_arn
}

output "vault_seal" {
  description = "Value for the chart's vault.seal (null when auto-unseal is off)."
  value = var.vault_auto_unseal ? {
    type = "awskms"
    config = {
      region     = var.region
      kms_key_id = aws_kms_key.vault_unseal[0].key_id
    }
  } : null

  # Vault must not start before its AWS credentials are in place.
  depends_on = [aws_eks_pod_identity_association.vault_unseal, aws_iam_role_policy.vault_unseal]
}
