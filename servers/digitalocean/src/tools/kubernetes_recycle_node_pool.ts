import { z } from "zod"

export const toolName = `kubernetes_recycle_node_pool`
export const toolDescription = `Recycle a Kubernetes Node Pool`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/recycle`
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
    "cluster_id",
    "node_pool_id"
  ],
  "cookie": [],
  "body": [
    "nodes"
  ]
}
export const flatMap = {}

export const inputParams = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "node_pool_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes node pool."),
  "nodes": z.array(z.string()).optional()
}