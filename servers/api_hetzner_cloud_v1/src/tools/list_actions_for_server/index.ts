import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_actions_for_server",
  "toolDescription": "Get all Actions for a Server",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions",
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