import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_get_clusteruser",
  "toolDescription": "Retrieve User Information for a Kubernetes Cluster",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}/user",
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
      "cluster_id": "cluster_id"
    }
  },
  inputParamsSchema
}

export default tool