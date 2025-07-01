import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_payments_link_main_image",
  "toolDescription": "Set payments link main image",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/paymentLinks/{paymentLinkId}/images/{imageId}/setAsMain",
  "method": "put",
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