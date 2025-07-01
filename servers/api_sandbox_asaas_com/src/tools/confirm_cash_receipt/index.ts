import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "confirm_cash_receipt",
  "toolDescription": "Confirm cash receipt",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments/{id}/receiveInCash",
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
    "path": {
      "id": "id"
    },
    "body": {
      "paymentDate": "paymentDate",
      "value": "value",
      "notifyCustomer": "notifyCustomer"
    }
  },
  inputParamsSchema
}

export default tool