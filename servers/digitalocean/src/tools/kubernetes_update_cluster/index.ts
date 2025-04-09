export { inputParams } from "./schema/root.js"

export const toolName = `kubernetes_update_cluster`
export const toolDescription = `Update a Kubernetes Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/kubernetes/clusters/{cluster_id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "cluster_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "tags",
    "maintenance_policy",
    "auto_upgrade",
    "surge_upgrade",
    "ha",
    "control_plane_firewall",
    "cluster_autoscaler_configuration",
    "routing_agent"
  ]
}
export const flatMap = {}