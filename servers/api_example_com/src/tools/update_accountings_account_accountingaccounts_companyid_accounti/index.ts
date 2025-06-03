import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_accountings_account_accountingaccounts_companyid_accounti",
  "toolDescription": "Update accounting account",
  "baseUrl": "https://api.example.com",
  "path": "/accountingaccounts/{companyId}/{accountingCode}",
  "method": "patch",
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
    },
    "body": {
      "active": "active",
      "type": "type",
      "accountingName": "accountingName",
      "collective": "collective",
      "additionalInfo": "additionalInfo",
      "attributes": "attributes"
    }
  },
  inputParamsSchema
}

export default tool