import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getissueworklog",
  "toolDescription": "Get issue worklogs",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/{issueIdOrKey}/worklog",
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
      "issueIdOrKey": "issueIdOrKey"
    },
    "query": {
      "startAt": "startAt",
      "maxResults": "maxResults",
      "startedAfter": "startedAfter",
      "startedBefore": "startedBefore",
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool