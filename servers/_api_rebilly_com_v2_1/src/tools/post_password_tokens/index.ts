import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_password_tokens",
  "toolDescription": "Create a Reset Password Token",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/password-tokens",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "token": "token",
      "username": "username",
      "password": "password",
      "credential": "credential",
      "expiredTime": "expiredTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool