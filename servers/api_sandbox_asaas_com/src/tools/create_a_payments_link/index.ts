import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_a_payments_link",
  "toolDescription": "Create a payments link",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/paymentLinks",
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
      "name": "name",
      "description": "description",
      "endDate": "endDate",
      "value": "value",
      "billingType": "billingType",
      "chargeType": "chargeType",
      "dueDateLimitDays": "dueDateLimitDays",
      "subscriptionCycle": "subscriptionCycle",
      "maxInstallmentCount": "maxInstallmentCount",
      "externalReference": "externalReference",
      "notificationEnabled": "notificationEnabled",
      "callback": "callback",
      "isAddressRequired": "isAddressRequired"
    }
  },
  inputParamsSchema
}

export default tool