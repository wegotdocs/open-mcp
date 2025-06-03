import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_accountings_account_accountingaccounts_companyid_post",
  "toolDescription": "Create accounting account",
  "baseUrl": "https://api.example.com",
  "path": "/accountingaccounts/{companyId}",
  "method": "post",
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
    "body": {
      "active": "active",
      "type": "type",
      "accountingName": "accountingName",
      "collective": "collective",
      "additionalInfo": "additionalInfo",
      "attributes": "attributes",
      "accountingCode": "accountingCode"
    }
  },
  inputParamsSchema
}

export default tool