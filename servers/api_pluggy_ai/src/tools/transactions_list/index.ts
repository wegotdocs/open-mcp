import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transactions_list",
  "toolDescription": "List",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/transactions",
  "method": "get",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "accountId": "accountId",
      "ids": "ids",
      "from": "from",
      "to": "to",
      "pageSize": "pageSize",
      "page": "page",
      "billId": "billId",
      "createdAtFrom": "createdAtFrom"
    }
  },
  inputParamsSchema
}

export default tool