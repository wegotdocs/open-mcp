import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "client_category_rules_create",
  "toolDescription": "Create Category Rule",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/categories/rules",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "description": "description",
      "categoryId": "categoryId",
      "transactionType": "transactionType",
      "accountType": "accountType",
      "matchType": "matchType"
    }
  },
  inputParamsSchema
}

export default tool