export { inputParams } from "./schema/root.js"

export const toolName = `kubernetes_get_credentials`
export const toolDescription = `Retrieve Credentials for a Kubernetes Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/kubernetes/clusters/{cluster_id}/credentials`
export const method = `get`
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
  "query": [
    "expiry_seconds"
  ],
  "header": [],
  "path": [
    "cluster_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}