import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "request_recharge",
  "toolDescription": "Request recharge",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/mobilePhoneRecharges",
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
      "value": "value",
      "phoneNumber": "phoneNumber"
    }
  },
  inputParamsSchema
}

export default tool