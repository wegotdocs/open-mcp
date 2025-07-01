import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_payments_link",
  "toolDescription": "Update a payments link",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/paymentLinks/{id}",
  "method": "put",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "endDate": "endDate",
      "value": "value",
      "active": "active",
      "billingType": "billingType",
      "chargeType": "chargeType",
      "dueDateLimitDays": "dueDateLimitDays",
      "subscriptionCycle": "subscriptionCycle",
      "maxInstallmentCount": "maxInstallmentCount",
      "externalReference": "externalReference",
      "notificationEnabled": "notificationEnabled",
      "callback": "callback"
    }
  },
  inputParamsSchema
}

export default tool