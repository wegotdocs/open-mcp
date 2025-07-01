import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_payments",
  "toolDescription": "List payments",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments",
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
      "installment": "installment",
      "offset": "offset",
      "limit": "limit",
      "customer": "customer",
      "customerGroupName": "customerGroupName",
      "billingType": "billingType",
      "status": "status",
      "subscription": "subscription",
      "externalReference": "externalReference",
      "paymentDate": "paymentDate",
      "invoiceStatus": "invoiceStatus",
      "estimatedCreditDate": "estimatedCreditDate",
      "pixQrCodeId": "pixQrCodeId",
      "anticipated": "anticipated",
      "anticipable": "anticipable",
      "dateCreated[ge]": "dateCreated[ge]",
      "dateCreated[le]": "dateCreated[le]",
      "paymentDate[ge]": "paymentDate[ge]",
      "paymentDate[le]": "paymentDate[le]",
      "estimatedCreditDate[ge]": "estimatedCreditDate[ge]",
      "estimatedCreditDate[le]": "estimatedCreditDate[le]",
      "dueDate[ge]": "dueDate[ge]",
      "dueDate[le]": "dueDate[le]",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool