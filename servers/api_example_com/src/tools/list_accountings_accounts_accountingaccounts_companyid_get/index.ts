import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_accountings_accounts_accountingaccounts_companyid_get",
  "toolDescription": "List accounting accounts",
  "baseUrl": "https://api.example.com",
  "path": "/accountingaccounts/{companyId}",
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
      "limit": "limit",
      "nextPageToken": "nextPageToken"
    }
  },
  inputParamsSchema
}

export default tool