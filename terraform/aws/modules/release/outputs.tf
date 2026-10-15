output "values_yaml" {
  description = "Values generated for the BoltMCP chart (before helm_values is merged in)."
  value       = yamlencode(local.values)
}
