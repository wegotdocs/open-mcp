import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_new_payment_with_summary_data_in_response",
  "toolDescription": "Create new payment with summary data in response",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/lean/payments",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "customer": "customer",
      "billingType": "billingType",
      "value": "value",
      "dueDate": "dueDate",
      "description": "description",
      "daysAfterDueDateToRegistrationCancellation": "daysAfterDueDateToRegistrationCancellation",
      "externalReference": "externalReference",
      "installmentCount": "installmentCount",
      "totalValue": "totalValue",
      "installmentValue": "installmentValue",
      "discount": "discount",
      "interest": "interest",
      "fine": "fine",
      "postalService": "postalService",
      "split": "split",
      "callback": "callback"
    }
  },
  inputParamsSchema
}

export default tool