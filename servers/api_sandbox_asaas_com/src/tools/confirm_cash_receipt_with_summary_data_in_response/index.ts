import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "confirm_cash_receipt_with_summary_data_in_response",
  "toolDescription": "Confirm cash receipt with summary data in response",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/lean/payments/{id}/receiveInCash",
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