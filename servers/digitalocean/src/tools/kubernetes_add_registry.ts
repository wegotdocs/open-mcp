import { z } from "zod"

export const toolName = `kubernetes_add_registry`
export const toolDescription = `Add Container Registry to Kubernetes Clusters`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/kubernetes/registry`
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
    "cluster_uuids"
  ]
}
export const flatMap = {}

export const inputParams = {
  "cluster_uuids": z.array(z.string()).describe("An array containing the UUIDs of Kubernetes clusters.").optional()
}