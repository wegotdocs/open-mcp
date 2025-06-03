import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_accountings_account_accountingaccounts_companyid_accoun",
  "toolDescription": "Retrieve accounting account",
  "baseUrl": "https://api.example.com",
  "path": "/accountingaccounts/{companyId}/{accountingCode}",
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
      "accountingCode": "accountingCode",
      "companyId": "companyId"
    }
  },
  inputParamsSchema
}

export default tool