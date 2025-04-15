import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_get_nodepool",
  "toolDescription": "Retrieve a Node Pool for a Kubernetes Cluster",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
  "method": "get",
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
    }
  },
  inputParamsSchema
}

export default tool