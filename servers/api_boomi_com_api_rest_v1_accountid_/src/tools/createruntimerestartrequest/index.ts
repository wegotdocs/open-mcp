import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createruntimerestartrequest",
  "toolDescription": "Creates a RuntimeRestartRequest object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/RuntimeRestartRequest",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "body": {
      "message": "message",
      "runtimeId": "runtimeId"
    }
  },
  inputParamsSchema
}

export default tool