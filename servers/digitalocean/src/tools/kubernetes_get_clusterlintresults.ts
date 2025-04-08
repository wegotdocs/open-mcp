import { z } from "zod"

export const toolName = `kubernetes_get_clusterlintresults`
export const toolDescription = `Fetch Clusterlint Diagnostics for a Kubernetes Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/kubernetes/clusters/{cluster_id}/clusterlint`
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
    "run_id"
  ],
  "header": [],
  "path": [
    "cluster_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "run_id": z.string().uuid().describe("Specifies the clusterlint run whose results will be retrieved.").optional()
}