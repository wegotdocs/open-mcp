import { z } from "zod"

export const toolName = `kubernetes_upgrade_cluster`
export const toolDescription = `Upgrade a Kubernetes Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/kubernetes/clusters/{cluster_id}/upgrade`
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
  "body": [
    "version"
  ]
}
export const flatMap = {}

export const inputParams = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "version": z.string().describe("The slug identifier for the version of Kubernetes that the cluster will be upgraded to.").optional()
}