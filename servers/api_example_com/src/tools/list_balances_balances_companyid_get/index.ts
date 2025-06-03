import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_balances_balances_companyid_get",
  "toolDescription": "List balances",
  "baseUrl": "https://api.example.com",
  "path": "/balances/{companyId}",
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
      "companyId": "companyId"
    },
    "query": {
      "productId": "productId",
      "startDate": "startDate",
      "endDate": "endDate",
      "limit": "limit",
      "nextPageToken": "nextPageToken"
    }
  },
  inputParamsSchema
}

export default tool