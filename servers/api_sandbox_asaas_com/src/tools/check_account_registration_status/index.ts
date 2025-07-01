import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_account_registration_status",
  "toolDescription": "Check account registration status",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/myAccount/status/",
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