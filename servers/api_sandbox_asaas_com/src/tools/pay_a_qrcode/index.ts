import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pay_a_qrcode",
  "toolDescription": "Pay a QRCode",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/pix/qrCodes/pay",
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
      "qrCode": "qrCode",
      "value": "value",
      "description": "description",
      "scheduleDate": "scheduleDate"
    }
  },
  inputParamsSchema
}

export default tool