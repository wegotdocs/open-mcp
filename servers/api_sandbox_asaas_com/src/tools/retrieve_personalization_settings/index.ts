import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_personalization_settings",
  "toolDescription": "Retrieve personalization settings",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/myAccount/paymentCheckoutConfig/",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool