import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addworklog",
  "toolDescription": "Add worklog",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/{issueIdOrKey}/worklog",
  "method": "post",
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
      "adjustEstimate": "adjustEstimate",
      "newEstimate": "newEstimate",
      "reduceBy": "reduceBy",
      "expand": "expand",
      "overrideEditableFlag": "overrideEditableFlag"
    },
    "body": {
      "author": "author",
      "comment": "comment",
      "created": "created",
      "id": "id",
      "issueId": "issueId",
      "properties": "properties",
      "self": "self",
      "started": "started",
      "timeSpent": "timeSpent",
      "timeSpentSeconds": "timeSpentSeconds",
      "updateAuthor": "updateAuthor",
      "updated": "updated",
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool