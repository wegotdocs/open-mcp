import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_authentication_tokens",
  "toolDescription": "Login",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/authentication-tokens",
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
      "credentialId": "credentialId",
      "customerId": "customerId",
      "expiredTime": "expiredTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool