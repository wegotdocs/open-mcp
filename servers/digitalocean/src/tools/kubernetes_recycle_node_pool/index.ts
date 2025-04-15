import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_recycle_node_pool",
  "toolDescription": "Recycle a Kubernetes Node Pool",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/recycle",
  "method": "post",
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
      "node_pool_id": "node_pool_id"
    },
    "body": {
      "nodes": "nodes"
    }
  },
  inputParamsSchema
}

export default tool