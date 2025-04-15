import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_remove_registry",
  "toolDescription": "Remove Container Registry from Kubernetes Clusters",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/registry",
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
    "body": {
      "cluster_uuids": "cluster_uuids"
    }
  },
  inputParamsSchema
}

export default tool