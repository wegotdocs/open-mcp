import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "decode_a_qrcode_for_payment",
  "toolDescription": "Decode a QRCode for payment",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/pix/qrCodes/decode",
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
      "payload": "payload",
      "changeValue": "changeValue"
    }
  },
  inputParamsSchema
}

export default tool