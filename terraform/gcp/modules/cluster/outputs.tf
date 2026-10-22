output "cluster_name" {
  description = "Name of the GKE cluster."
  value       = google_container_cluster.this.name
}

output "cluster_location" {
  description = "Region of the GKE cluster."
  value       = google_container_cluster.this.location
}

output "cluster_endpoint" {
  description = "Kubernetes API server endpoint (an IP address, without scheme)."
  value       = google_container_cluster.this.endpoint
}

output "cluster_ca_certificate" {
  description = "Base64-encoded cluster CA certificate."
  value       = google_container_cluster.this.master_auth[0].cluster_ca_certificate
}

output "network_id" {
  description = "ID of the VPC the cluster runs in."
  value       = google_compute_network.this.id
}
