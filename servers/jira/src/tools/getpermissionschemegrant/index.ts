import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpermissionschemegrant",
  "toolDescription": "Get permission scheme grant",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}",
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
      "schemeId": "schemeId",
      "permissionId": "permissionId"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool