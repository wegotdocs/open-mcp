import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createprocesslog",
  "toolDescription": "Creates a ProcessLog object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ProcessLog",
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
      "executionId": "executionId",
      "logLevel": "logLevel"
    }
  },
  inputParamsSchema
}

export default tool