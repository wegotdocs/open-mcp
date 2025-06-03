import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdateexpenseaccounts",
  "toolDescription": "Create or update expense accounts",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/expenseAccounts",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "business_id": "b_business_id",
      "expense_accounts": "expense_accounts",
      "limit_char_expense_account": "limit_char_expense_account",
      "limit_char_accounting_account": "limit_char_accounting_account"
    }
  },
  inputParamsSchema
}

export default tool