import { z } from "zod"

export const toolName = `kubernetes_add_nodepool`
export const toolDescription = `Add a Node Pool to a Kubernetes Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/kubernetes/clusters/{cluster_id}/node_pools`
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
  "path": [
    "cluster_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.") }).shape