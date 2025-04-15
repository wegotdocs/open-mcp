import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setlocale",
  "toolDescription": "Set locale",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/mypreferences/locale",
  "method": "put",
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
      "locale": "locale"
    }
  },
  inputParamsSchema
}

export default tool