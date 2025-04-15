import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignissue",
  "toolDescription": "Assign issue",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/{issueIdOrKey}/assignee",
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
      "issueIdOrKey": "issueIdOrKey"
    },
    "body": {
      "accountId": "accountId",
      "accountType": "accountType",
      "active": "active",
      "applicationRoles": "applicationRoles",
      "avatarUrls": "avatarUrls",
      "displayName": "displayName",
      "emailAddress": "emailAddress",
      "expand": "expand",
      "groups": "groups",
      "key": "key",
      "locale": "locale",
      "name": "name",
      "self": "self",
      "timeZone": "timeZone"
    }
  },
  inputParamsSchema
}

export default tool