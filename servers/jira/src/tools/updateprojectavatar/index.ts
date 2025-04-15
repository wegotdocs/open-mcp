import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateprojectavatar",
  "toolDescription": "Set project avatar",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/project/{projectIdOrKey}/avatar",
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
      "projectIdOrKey": "projectIdOrKey"
    },
    "body": {
      "fileName": "fileName",
      "id": "id",
      "isDeletable": "isDeletable",
      "isSelected": "isSelected",
      "isSystemAvatar": "isSystemAvatar",
      "owner": "owner",
      "urls": "urls"
    }
  },
  inputParamsSchema
}

export default tool