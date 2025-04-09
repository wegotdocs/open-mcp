export { inputParams } from "./schema/root.js"

export const toolName = `kubernetes_destroy_associatedresourcesselective`
export const toolDescription = `Selectively Delete a Cluster and its Associated Resources`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/selective`
export const method = `delete`
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
    "load_balancers",
    "volumes",
    "volume_snapshots"
  ]
}
export const flatMap = {}