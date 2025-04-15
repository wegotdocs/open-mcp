import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getattachmentthumbnail",
  "toolDescription": "Get attachment thumbnail",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/attachment/thumbnail/{id}",
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
      "id": "id"
    },
    "query": {
      "redirect": "redirect",
      "fallbackToDefault": "fallbackToDefault",
      "width": "width",
      "height": "height"
    }
  },
  inputParamsSchema
}

export default tool