import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepermissionscheme",
  "toolDescription": "Update permission scheme",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/permissionscheme/{schemeId}",
  "method": "put",
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
      "schemeId": "schemeId"
    },
    "query": {
      "expand": "expand"
    },
    "body": {
      "description": "description",
      "expand": "b_expand",
      "id": "id",
      "name": "name",
      "permissions": "permissions",
      "scope": "scope",
      "self": "self"
    }
  },
  inputParamsSchema
}

export default tool