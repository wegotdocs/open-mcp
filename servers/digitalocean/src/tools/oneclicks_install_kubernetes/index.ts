import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oneclicks_install_kubernetes",
  "toolDescription": "Install Kubernetes 1-Click Applications",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/1-clicks/kubernetes",
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
      "addon_slugs": "addon_slugs",
      "cluster_uuid": "cluster_uuid"
    }
  },
  inputParamsSchema
}

export default tool