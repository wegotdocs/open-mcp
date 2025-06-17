import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_3dsecure",
  "toolDescription": "Create a ThreeDSecure entry",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/3dsecure",
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
      "gatewayAccountId": "gatewayAccountId",
      "paymentCardId": "paymentCardId",
      "websiteId": "websiteId",
      "enrolled": "enrolled",
      "enrollmentEci": "enrollmentEci",
      "eci": "eci",
      "cavv": "cavv",
      "xid": "xid",
      "payerAuthResponseStatus": "payerAuthResponseStatus",
      "signatureVerification": "signatureVerification",
      "amount": "amount",
      "currency": "currency",
      "createdTime": "createdTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool