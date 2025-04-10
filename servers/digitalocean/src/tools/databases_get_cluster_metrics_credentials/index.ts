export { inputParams } from "./schema/root.js"

export const toolName = `databases_get_cluster_metrics_credentials`
export const toolDescription = `Retrieve Database Clusters' Metrics Endpoint Credentials`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/metrics/credentials`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}