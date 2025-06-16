import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_firewall_actions",
  "toolDescription": "Get all Actions",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/firewalls/actions",
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
    "query": {
      "id": "id",
      "sort": "sort",
      "status": "status",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool