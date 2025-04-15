import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getavatarimagebyowner",
  "toolDescription": "Get avatar image by owner",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/universal_avatar/view/type/{type}/owner/{entityId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "type": "type",
      "entityId": "entityId"
    },
    "query": {
      "size": "size",
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool