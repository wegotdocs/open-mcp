import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "investment_transactions_list",
  "toolDescription": "List investment transactions",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/investments/{id}/transactions",
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
    "path": {
      "id": "id"
    },
    "query": {
      "pageSize": "pageSize",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool