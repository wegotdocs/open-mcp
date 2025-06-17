import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_bank_accounts_id_",
  "toolDescription": "Create a BankAccount with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/bank-accounts/{id}",
  "method": "put",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "customerId": "customerId",
      "bankName": "bankName",
      "routingNumber": "routingNumber",
      "accountNumber": "accountNumber",
      "accountType": "accountType",
      "token": "token",
      "address": "address",
      "status": "status",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "customFields": "customFields",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool