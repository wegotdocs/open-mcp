import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_accountings_account_accountingaccounts_companyid_accounti",
  "toolDescription": "Delete accounting account",
  "baseUrl": "https://api.example.com",
  "path": "/accountingaccounts/{companyId}/{accountingCode}",
  "method": "delete",
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
      "accountingCode": "accountingCode",
      "companyId": "companyId"
    }
  },
  inputParamsSchema
}

export default tool