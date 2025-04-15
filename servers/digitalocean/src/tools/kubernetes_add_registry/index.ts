import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_add_registry",
  "toolDescription": "Add Container Registry to Kubernetes Clusters",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/registry",
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
    "body": {
      "cluster_uuids": "cluster_uuids"
    }
  },
  inputParamsSchema
}

export default tool