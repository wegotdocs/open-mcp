import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_payments",
  "toolDescription": "Create a payment",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/payments",
  "method": "post",
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
      "websiteId": "websiteId",
      "customerId": "customerId",
      "currency": "currency",
      "amount": "amount",
      "scheduledTime": "scheduledTime",
      "invoiceIds": "invoiceIds",
      "description": "description",
      "retryInstruction": "retryInstruction",
      "retryNumber": "retryNumber",
      "retriedPaymentId": "retriedPaymentId",
      "customFields": "customFields",
      "paymentInstrument": "paymentInstrument",
      "billingAddress": "billingAddress",
      "createdBy": "createdBy",
      "updatedBy": "updatedBy",
      "status": "status",
      "result": "result",
      "riskMetadata": "riskMetadata",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool