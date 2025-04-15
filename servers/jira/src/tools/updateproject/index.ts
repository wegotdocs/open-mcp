import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproject",
  "toolDescription": "Update project",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/project/{projectIdOrKey}",
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
    "query": {
      "expand": "expand"
    },
    "body": {
      "assigneeType": "assigneeType",
      "avatarId": "avatarId",
      "categoryId": "categoryId",
      "description": "description",
      "issueSecurityScheme": "issueSecurityScheme",
      "key": "key",
      "lead": "lead",
      "leadAccountId": "leadAccountId",
      "name": "name",
      "notificationScheme": "notificationScheme",
      "permissionScheme": "permissionScheme",
      "releasedProjectKeys": "releasedProjectKeys",
      "url": "url"
    }
  },
  inputParamsSchema
}

export default tool