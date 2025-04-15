import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_list_associatedresources",
  "toolDescription": "List Associated Resources for Cluster Deletion",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources",
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