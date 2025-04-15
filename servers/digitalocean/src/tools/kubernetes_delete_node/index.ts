import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_delete_node",
  "toolDescription": "Delete a Node in a Kubernetes Cluster",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/nodes/{node_id}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "cluster_id": "cluster_id",
      "node_pool_id": "node_pool_id",
      "node_id": "node_id"
    },
    "query": {
      "skip_drain": "skip_drain",
      "replace": "replace"
    }
  },
  inputParamsSchema
}

export default tool