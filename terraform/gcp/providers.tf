provider "google" {
  project = var.project_id
  region  = var.region

  default_labels = var.labels
}

# The kubernetes and helm providers authenticate against the cluster this stack
# creates with the access token of the identity running Terraform (Application
# Default Credentials), so no CLI plugin is needed.
data "google_client_config" "this" {}

provider "kubernetes" {
  host                   = "https://${module.cluster.cluster_endpoint}"
  cluster_ca_certificate = base64decode(module.cluster.cluster_ca_certificate)
  token                  = data.google_client_config.this.access_token
}

provider "helm" {
  kubernetes = {
    host                   = "https://${module.cluster.cluster_endpoint}"
    cluster_ca_certificate = base64decode(module.cluster.cluster_ca_certificate)
    token                  = data.google_client_config.this.access_token
  }
}
