import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_an_image_from_payments_link",
  "toolDescription": "Remove an image from payments link",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/paymentLinks/{paymentLinkId}/images/{imageId}",
  "method": "delete",
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
      "paymentLinkId": "paymentLinkId",
      "imageId": "imageId"
    }
  },
  inputParamsSchema
}

export default tool