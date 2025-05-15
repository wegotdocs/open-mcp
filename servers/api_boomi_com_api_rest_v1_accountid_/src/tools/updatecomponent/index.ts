import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecomponent",
  "toolDescription": "Modifies or updates a Component object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Component/{componentId}",
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
    "path": {
      "componentId": "componentId"
    }
  },
  inputParamsSchema
}

export default tool