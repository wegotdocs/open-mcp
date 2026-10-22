# BoltMCP on GCP with Terraform

One `terraform apply` creates a GKE Autopilot cluster and installs BoltMCP on it. BoltMCP is then served over HTTPS at `web.<domain>`, `auth.<domain>`, `server.<domain>` and `inspector.<domain>` once those hostnames point at the load balancer.

Full guide: https://install.boltmcp.io/docs/terraform-gcp

## What it creates

| Module | Resources |
| --- | --- |
| `modules/cluster` | Compute and GKE APIs, a VPC with one regional subnet, the GKE Autopilot cluster |
| `modules/gcp-integration` | Reserved global IP address, Google-managed certificate for the BoltMCP hostnames, Cloud DNS records (optional), load balancer health checks and timeouts (`BackendConfig`s), Cloud KMS key + Workload Identity grant for Vault auto-unseal |
| `../modules/release` | `boltmcp` namespace, image pull secret, the three application Secrets with random values, the BoltMCP Helm release (shared with the [AWS stack](../aws)) |

Traffic flows Internet → global external Application Load Balancer (HTTPS only, TLS terminated with the Google-managed certificate) → BoltMCP pods. GKE's built-in Ingress controller creates the load balancer from the chart's Ingress, so you don't need ingress-nginx or cert-manager.

## Requirements

- Terraform >= 1.9 and the `gcloud` CLI, with Application Default Credentials for an account that can create the resources above in the project (`gcloud auth application-default login`). Terraform authenticates to the cluster with the same credentials.
- An existing GCP project with billing enabled. The stack enables the APIs it uses (Compute Engine, Kubernetes Engine, Cloud KMS, and Cloud DNS when `dns_zone_name` is set).
- A domain whose DNS you control, at any provider. If it's in a Cloud DNS zone in the same project, set `dns_zone_name` and Terraform creates the records.
- Your BoltMCP access key at `keys/boltmcp-key.json` in the root of this repository, or set `registry_key_path`.

## Usage

```bash
cd terraform/gcp
cp terraform.tfvars.example terraform.tfvars   # then edit
terraform init
terraform apply
terraform output next_steps
```

The first apply takes about 20 minutes. After it finishes:

1. Unless Terraform created them in Cloud DNS, create the A records from `terraform output dns_records` at your DNS provider. All four hostnames point at the reserved IP (`load_balancer_ip`).
2. Google issues the certificate once every hostname resolves to that IP, usually within 15–60 minutes. HTTPS, and so sign-in, doesn't work until then.
3. Do the one-time Vault `operator init` and bootstrap.

`terraform output next_steps` prints the commands.

To upgrade BoltMCP, pull the latest version of this repository, change `chart_version`, then run `terraform init` (picks up any module changes) and `terraform apply`.

## State contains secrets

Terraform generates the database passwords, OIDC client secrets and admin passwords, so they are stored in Terraform state. Use an encrypted, access-controlled remote backend (for example a GCS bucket with versioning and restrictive IAM) for anything beyond an evaluation install.

## Using an existing cluster

The submodules are independent. On an existing GKE cluster (VPC-native, with Workload Identity Federation for GKE enabled), call `modules/gcp-integration` and `../modules/release` from your own root module, with the kubernetes and helm providers pointed at that cluster. Wire them up the same way `main.tf` does.

## Inputs

| Name | Default | Description |
| --- | --- | --- |
| `project_id` | required | GCP project ID |
| `region` | required | GCP region |
| `domain` | required | BoltMCP apex domain (`global.domain`), e.g. `boltmcp.example.com` |
| `admin_email` | required | Email of the first BoltMCP admin user |
| `dns_zone_name` | `null` | Cloud DNS managed zone (its name, not its DNS name) in the project that contains `domain`. When set, Terraform creates the A records |
| `chart_version` | `0.5.23` | BoltMCP chart version |
| `registry_key_path` | `../../keys/boltmcp-key.json` | BoltMCP access key |
| `release_name` / `namespace` | `boltmcp` | Helm release name / namespace |
| `helm_values` | `{}` | Extra chart values, deep-merged over the generated ones |
| `vault_auto_unseal` | `true` | Auto-unseal Vault with Cloud KMS |
| `cluster_name` | `boltmcp` | GKE cluster name. Also names the VPC, subnet, IP address, certificate and KMS key ring |
| `release_channel` | `REGULAR` | GKE release channel (`RAPID`, `REGULAR`, `STABLE`) |
| `subnet_cidr` | `10.0.0.0/20` | Primary range of the cluster subnet |
| `labels` | `{}` | Labels for every GCP resource that supports them |

## Outputs

`web_url`, `auth_url`, `server_url`, `load_balancer_ip`, `dns_records`, `kubeconfig_command`, `next_steps`, `helm_values`.

## Destroying

`terraform destroy` uninstalls BoltMCP, waits two minutes for the load balancer and database disk to be cleaned up by GKE's controllers, then deletes the cluster, VPC, IP address, certificate and any Cloud DNS records it created. Cloud KMS key rings can't be deleted, so the key ring stays in the project (it costs nothing) and the key's versions are destroyed after 30 days. A later apply creates a new key ring with a different suffix. Remove any DNS records you created by hand at your provider.
