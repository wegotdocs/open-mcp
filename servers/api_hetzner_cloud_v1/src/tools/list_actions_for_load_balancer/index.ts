import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_actions_for_load_balancer",
  "toolDescription": "Get all Actions for a Load Balancer",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancers/{id}/actions",
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
      "id": "id"
    },
    "query": {
      "sort": "sort",
      "status": "status",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool