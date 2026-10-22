# The APIs this module needs. They stay enabled on destroy: other workloads in
# the project may depend on them.
resource "google_project_service" "this" {
  for_each = toset(["compute.googleapis.com", "container.googleapis.com"])

  project            = var.project_id
  service            = each.value
  disable_on_destroy = false
}

# -----------------------------------------------------------------------------
# Network: a dedicated VPC with one regional subnet. Nodes get public IPs for
# egress (image pulls, upstream APIs), but the VPC has no firewall rules of its
# own: inbound traffic is limited to what GKE opens for the control plane and
# the load balancer's health checks.
# -----------------------------------------------------------------------------

resource "google_compute_network" "this" {
  project                 = var.project_id
  name                    = var.cluster_name
  auto_create_subnetworks = false

  depends_on = [google_project_service.this]
}

resource "google_compute_subnetwork" "this" {
  project                  = var.project_id
  name                     = var.cluster_name
  region                   = var.region
  network                  = google_compute_network.this.id
  ip_cidr_range            = var.subnet_cidr
  private_ip_google_access = true
}

# -----------------------------------------------------------------------------
# GKE Autopilot: Google manages the nodes (scaled to fit the pods' requests),
# the Persistent Disk CSI driver, the Ingress controller and Workload Identity,
# so none of them need installing.
# -----------------------------------------------------------------------------

resource "google_container_cluster" "this" {
  project  = var.project_id
  name     = var.cluster_name
  location = var.region

  enable_autopilot = true

  network    = google_compute_network.this.id
  subnetwork = google_compute_subnetwork.this.id

  # VPC-native, with the pod and service ranges allocated by GKE.
  ip_allocation_policy {}

  release_channel {
    channel = var.release_channel
  }

  # Same as the AWS stack: `terraform destroy` deletes the cluster.
  deletion_protection = false
}
