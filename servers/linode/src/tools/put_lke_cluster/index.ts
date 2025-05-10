export { inputParams } from "./schema/root.js"

export const toolName = `put_lke_cluster`
export const toolDescription = `Update a Kubernetes cluster`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/lke/clusters/{clusterId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "control_plane",
    "k8s_version",
    "label",
    "tags"
  ]
}
export const flatMap = {}