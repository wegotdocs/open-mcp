import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_subaccounts",
  "toolDescription": "List subaccounts",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/accounts",
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
      "cpfCnpj": "cpfCnpj",
      "email": "email",
      "name": "name",
      "walletId": "walletId"
    }
  },
  inputParamsSchema
}

export default tool