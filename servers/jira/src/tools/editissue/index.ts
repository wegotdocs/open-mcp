import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editissue",
  "toolDescription": "Edit issue",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/{issueIdOrKey}",
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
    "query": {
      "notifyUsers": "notifyUsers",
      "overrideScreenSecurity": "overrideScreenSecurity",
      "overrideEditableFlag": "overrideEditableFlag",
      "returnIssue": "returnIssue",
      "expand": "expand"
    },
    "body": {
      "fields": "fields",
      "historyMetadata": "historyMetadata",
      "properties": "properties",
      "transition": "transition",
      "update": "update"
    }
  },
  inputParamsSchema
}

export default tool