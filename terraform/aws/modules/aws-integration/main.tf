data "aws_route53_zone" "this" {
  name         = var.route53_zone_name
  private_zone = false
}

# -----------------------------------------------------------------------------
# Storage: a CSI-backed gp3 class for the bundled PostgreSQL volume. A fresh
# EKS Auto Mode cluster only has a non-default gp2 class on the deprecated
# in-tree provisioner.
# -----------------------------------------------------------------------------

resource "kubernetes_storage_class_v1" "gp3" {
  metadata {
    name = "gp3"
  }

  storage_provisioner    = "ebs.csi.eks.amazonaws.com"
  volume_binding_mode    = "WaitForFirstConsumer"
  allow_volume_expansion = true
  reclaim_policy         = "Delete"

  parameters = {
    type      = "gp3"
    encrypted = "true"
  }
}

# -----------------------------------------------------------------------------
# TLS: one wildcard ACM certificate covers web., auth., server. and inspector.
# It's validated through DNS in the Route 53 zone and renewed by AWS.
# -----------------------------------------------------------------------------

resource "aws_acm_certificate" "this" {
  domain_name       = "*.${var.domain}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "certificate_validation" {
  for_each = {
    for o in aws_acm_certificate.this.domain_validation_options : o.domain_name => {
      name   = o.resource_record_name
      type   = o.resource_record_type
      record = o.resource_record_value
    }
  }

  zone_id         = data.aws_route53_zone.this.zone_id
  name            = each.value.name
  type            = each.value.type
  records         = [each.value.record]
  ttl             = 60
  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "this" {
  certificate_arn         = aws_acm_certificate.this.arn
  validation_record_fqdns = [for r in aws_route53_record.certificate_validation : r.fqdn]
}

# -----------------------------------------------------------------------------
# Ingress: an IngressClass for the Application Load Balancer controller built
# into EKS Auto Mode. Scheme, certificate and listeners are set per Ingress by
# annotation (see the root module).
# -----------------------------------------------------------------------------

resource "kubernetes_ingress_class_v1" "alb" {
  metadata {
    name = "alb"
  }

  spec {
    controller = "eks.amazonaws.com/alb"
  }
}

# -----------------------------------------------------------------------------
# DNS: external-dns watches Ingresses and points each BoltMCP hostname at the
# load balancer (Route 53 alias records). It's the only way to do this in one
# apply, because the load balancer doesn't exist until the chart's Ingress
# has been reconciled.
# -----------------------------------------------------------------------------

locals {
  external_dns_namespace       = "external-dns"
  external_dns_service_account = "external-dns"
}

data "aws_iam_policy_document" "pod_identity_trust" {
  statement {
    actions = ["sts:AssumeRole", "sts:TagSession"]

    principals {
      type        = "Service"
      identifiers = ["pods.eks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "external_dns" {
  name_prefix        = "${var.cluster_name}-external-dns-"
  assume_role_policy = data.aws_iam_policy_document.pod_identity_trust.json
}

data "aws_iam_policy_document" "external_dns" {
  statement {
    actions   = ["route53:ChangeResourceRecordSets", "route53:ListResourceRecordSets", "route53:ListTagsForResource", "route53:ListTagsForResources"]
    resources = [data.aws_route53_zone.this.arn]
  }

  statement {
    actions   = ["route53:ListHostedZones"]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "external_dns" {
  role   = aws_iam_role.external_dns.id
  policy = data.aws_iam_policy_document.external_dns.json
}

resource "aws_eks_pod_identity_association" "external_dns" {
  cluster_name    = var.cluster_name
  namespace       = local.external_dns_namespace
  service_account = local.external_dns_service_account
  role_arn        = aws_iam_role.external_dns.arn
}

resource "helm_release" "external_dns" {
  name             = "external-dns"
  repository       = "https://kubernetes-sigs.github.io/external-dns/"
  chart            = "external-dns"
  version          = var.external_dns_chart_version
  namespace        = local.external_dns_namespace
  create_namespace = true

  values = [yamlencode({
    provider = { name = "aws" }
    env = [
      { name = "AWS_DEFAULT_REGION", value = var.region },
    ]
    serviceAccount = {
      create = true
      name   = local.external_dns_service_account
    }
    sources       = ["ingress"]
    domainFilters = [var.domain]
    extraArgs     = ["--zone-id-filter=${data.aws_route53_zone.this.zone_id}"]
    # Records are tagged with this owner, so external-dns only ever changes
    # or deletes records it created itself.
    txtOwnerId = var.cluster_name
    # Delete records when their Ingress goes away.
    policy = "sync"
  })]

  # The pod needs its AWS credentials from the moment it starts.
  depends_on = [aws_eks_pod_identity_association.external_dns, aws_iam_role_policy.external_dns]
}

# -----------------------------------------------------------------------------
# Vault auto-unseal: Vault decrypts its root key with this KMS key on every
# start, so it never needs unsealing by hand. Credentials reach the Vault pod
# through EKS Pod Identity, keyed on the chart's Vault ServiceAccount
# (<release>-vault), so the chart needs no ServiceAccount annotation.
# -----------------------------------------------------------------------------

resource "aws_kms_key" "vault_unseal" {
  count = var.vault_auto_unseal ? 1 : 0

  description             = "Vault auto-unseal key for BoltMCP on ${var.cluster_name}"
  enable_key_rotation     = true
  deletion_window_in_days = 30
}

resource "aws_kms_alias" "vault_unseal" {
  count = var.vault_auto_unseal ? 1 : 0

  name          = "alias/${var.cluster_name}-vault-unseal"
  target_key_id = aws_kms_key.vault_unseal[0].key_id
}

resource "aws_iam_role" "vault_unseal" {
  count = var.vault_auto_unseal ? 1 : 0

  name_prefix        = "${var.cluster_name}-vault-unseal-"
  assume_role_policy = data.aws_iam_policy_document.pod_identity_trust.json
}

data "aws_iam_policy_document" "vault_unseal" {
  count = var.vault_auto_unseal ? 1 : 0

  statement {
    actions   = ["kms:Encrypt", "kms:Decrypt", "kms:DescribeKey"]
    resources = [aws_kms_key.vault_unseal[0].arn]
  }
}

resource "aws_iam_role_policy" "vault_unseal" {
  count = var.vault_auto_unseal ? 1 : 0

  role   = aws_iam_role.vault_unseal[0].id
  policy = data.aws_iam_policy_document.vault_unseal[0].json
}

resource "aws_eks_pod_identity_association" "vault_unseal" {
  count = var.vault_auto_unseal ? 1 : 0

  cluster_name    = var.cluster_name
  namespace       = var.namespace
  service_account = "${var.release_name}-vault"
  role_arn        = aws_iam_role.vault_unseal[0].arn
}
