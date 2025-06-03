import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "webhookwannmepayment",
  "toolDescription": "Handle Wannme payment webhook",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/webhook/wannme/payment",
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
    "body": {
      "id": "id",
      "checksum": "checksum",
      "checksum512": "checksum512",
      "notificationType": "notificationType",
      "receiptNumber": "receiptNumber",
      "transactionCode": "transactionCode",
      "amount": "amount",
      "statusCode": "statusCode",
      "statusDescription": "statusDescription",
      "subStatusCode": "subStatusCode",
      "subStatusDescription": "subStatusDescription",
      "partnerReference1": "partnerReference1",
      "partnerReference2": "partnerReference2",
      "uniqueNotificationId": "uniqueNotificationId",
      "recurrentPaymentId": "recurrentPaymentId",
      "debtCaseId": "debtCaseId",
      "errorCode": "errorCode",
      "errorDescription": "errorDescription",
      "paymentMethod": "paymentMethod",
      "partnerId": "partnerId",
      "customField1": "customField1",
      "customField2": "customField2",
      "customField3": "customField3",
      "customField4": "customField4",
      "customField5": "customField5",
      "customField6": "customField6"
    }
  },
  inputParamsSchema
}

export default tool