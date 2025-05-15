import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcomponent",
  "toolDescription": "Retrieves an instance of a Component object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Component/{componentId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "componentId": "componentId"
    }
  },
  inputParamsSchema
}

export default tool