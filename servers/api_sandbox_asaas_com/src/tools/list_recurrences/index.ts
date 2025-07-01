import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_recurrences",
  "toolDescription": "List recurrences",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/pix/transactions/recurrings",
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
    "query": {
      "offset": "offset",
      "limit": "limit",
      "status": "status",
      "value": "value",
      "searchText": "searchText"
    }
  },
  inputParamsSchema
}

export default tool