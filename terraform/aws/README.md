# BoltMCP on AWS with Terraform

One `terraform apply` creates an EKS Auto Mode cluster and installs BoltMCP on it, served over HTTPS at `web.<domain>`, `auth.<domain>`, `server.<domain>` and `inspector.<domain>`.

Full guide: https://install.boltmcp.io/docs/terraform-aws

## What it creates

| Module | Resources |
| --- | --- |
| `modules/cluster` | VPC with public/private subnets across 3 AZs (optional), EKS Auto Mode cluster |
| `modules/aws-integration` | `gp3` StorageClass, wildcard ACM certificate validated in Route 53, `alb` IngressClass, external-dns (Route 53 records for the BoltMCP hostnames), KMS key + Pod Identity for Vault auto-unseal |
| `modules/release` | `boltmcp` namespace, image pull secret, the three application Secrets with random values, the BoltMCP Helm release |

Traffic flows Internet → Application Load Balancer (TLS terminated with the ACM certificate) → BoltMCP pods. You don't need ingress-nginx or cert-manager.

## Requirements

- Terraform >= 1.9 and the `aws` CLI, logged in to the target account. The kubernetes and helm providers get their cluster tokens from the `aws` CLI.
- A public Route 53 hosted zone in the same account that contains your BoltMCP domain.
- Your BoltMCP access key at `keys/boltmcp-key.json` in the root of this repository, or set `registry_key_path`.

## Usage

```bash
cd terraform/aws
cp terraform.tfvars.example terraform.tfvars   # then edit
terraform init
terraform apply
terraform output next_steps
```

The first apply takes about 15 minutes. After it finishes, the only manual step is the one-time Vault `operator init` and bootstrap; `terraform output next_steps` prints the commands.

To upgrade BoltMCP, change `chart_version` and run `terraform apply` again.

## State contains secrets

Terraform generates the database passwords, OIDC client secrets and admin passwords, so they are stored in Terraform state. Use an encrypted, access-controlled remote backend (for example S3 with encryption and a restrictive bucket policy) for anything beyond an evaluation install.

## Using an existing cluster

The submodules are independent. On an existing EKS Auto Mode cluster, call `modules/aws-integration` and `modules/release` from your own root module, with the kubernetes and helm providers pointed at that cluster.

## Inputs

| Name | Default | Description |
| --- | --- | --- |
| `region` | required | AWS region |
| `domain` | required | BoltMCP apex domain (`global.domain`), e.g. `boltmcp.example.com` |
| `route53_zone_name` | required | Public Route 53 zone containing `domain`, e.g. `example.com` |
| `admin_email` | required | Email of the first BoltMCP admin user |
| `chart_version` | `0.5.22` | BoltMCP chart version |
| `registry_key_path` | `../../keys/boltmcp-key.json` | BoltMCP access key |
| `release_name` / `namespace` | `boltmcp` | Helm release name / namespace |
| `helm_values` | `{}` | Extra chart values, deep-merged over the generated ones |
| `vault_auto_unseal` | `true` | Auto-unseal Vault with AWS KMS |
| `alb_idle_timeout_seconds` | `300` | Load balancer idle timeout (long-lived MCP streams) |
| `cluster_name` | `boltmcp` | EKS cluster name |
| `kubernetes_version` | EKS default | Kubernetes version |
| `create_vpc` | `true` | Create a VPC, or use `vpc_id` + `private_subnet_ids` |
| `vpc_cidr` | `10.0.0.0/16` | CIDR of the created VPC |
| `single_nat_gateway` | `true` | One NAT gateway, or one per AZ when `false` |
| `tags` | `{}` | Tags for every AWS resource |

An existing VPC must have its public subnets tagged `kubernetes.io/role/elb=1` and private subnets tagged `kubernetes.io/role/internal-elb=1`.

## Outputs

`web_url`, `auth_url`, `server_url`, `kubeconfig_command`, `next_steps`, `helm_values`.

## Destroying

`terraform destroy` uninstalls BoltMCP, waits two minutes for the load balancer, DNS records and database volume to be cleaned up by their controllers, then deletes the cluster and VPC. The KMS key is scheduled for deletion after 30 days.
