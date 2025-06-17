import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_subscriptions",
  "toolDescription": "Create a subscription",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/subscriptions",
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
      "customerId": "customerId",
      "planId": "planId",
      "websiteId": "websiteId",
      "initialInvoiceId": "initialInvoiceId",
      "deliveryAddress": "deliveryAddress",
      "billingAddress": "billingAddress",
      "status": "status",
      "quantity": "quantity",
      "autopay": "autopay",
      "inTrial": "inTrial",
      "rebillNumber": "rebillNumber",
      "canceledBy": "canceledBy",
      "cancelCategory": "cancelCategory",
      "cancelDescription": "cancelDescription",
      "riskMetadata": "riskMetadata",
      "startTime": "startTime",
      "activationTime": "activationTime",
      "endTime": "endTime",
      "renewalTime": "renewalTime",
      "canceledTime": "canceledTime",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "customFields": "customFields",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool