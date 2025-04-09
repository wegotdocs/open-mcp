export { inputParams } from "./schema/root.js"

export const toolName = `oneclicks_install_kubernetes`
export const toolDescription = `Install Kubernetes 1-Click Applications`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/1-clicks/kubernetes`
export const method = `post`
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
  "body": [
    "addon_slugs",
    "cluster_uuid"
  ]
}
export const flatMap = {}