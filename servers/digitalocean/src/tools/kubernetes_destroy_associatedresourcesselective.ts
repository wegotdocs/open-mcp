import { z } from "zod"

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

export const inputParams = z.object({ "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."), "load_balancers": z.array(z.string()).describe("A list of IDs for associated load balancers to destroy along with the cluster.").optional(), "volumes": z.array(z.string()).describe("A list of IDs for associated volumes to destroy along with the cluster.").optional(), "volume_snapshots": z.array(z.string()).describe("A list of IDs for associated volume snapshots to destroy along with the cluster.").optional() }).shape