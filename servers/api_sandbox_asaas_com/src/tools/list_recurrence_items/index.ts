import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_recurrence_items",
  "toolDescription": "List recurrence items",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/pix/transactions/recurrings/{id}/items",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "offset": "offset",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool