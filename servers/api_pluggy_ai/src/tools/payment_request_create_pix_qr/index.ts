import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payment_request_create_pix_qr",
  "toolDescription": "Create PIX QR payment request",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/payments/requests/pix-qr",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "pixQrCode": "pixQrCode",
      "callbackUrls": "callbackUrls",
      "customerId": "customerId"
    }
  },
  inputParamsSchema
}

export default tool