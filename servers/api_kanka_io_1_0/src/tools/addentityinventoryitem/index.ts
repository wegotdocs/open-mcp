import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addentityinventoryitem",
  "toolDescription": "Add item to entity inventory",
  "baseUrl": "https://api.kanka.io/1.0",
  "path": "/campaigns/{campaignId}/entities/{entityId}/inventory",
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
      "item_id": "item_id",
      "amount": "amount",
      "position": "position",
      "visibility": "visibility",
      "is_private": "is_private"
    }
  },
  inputParamsSchema
}

export default tool