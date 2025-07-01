import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_static_qrcode",
  "toolDescription": "Create static QRCode",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/pix/qrCodes/static",
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
      "addressKey": "addressKey",
      "description": "description",
      "value": "value",
      "format": "format",
      "expirationDate": "expirationDate",
      "expirationSeconds": "expirationSeconds",
      "allowsMultiplePayments": "allowsMultiplePayments",
      "externalReference": "externalReference"
    }
  },
  inputParamsSchema
}

export default tool