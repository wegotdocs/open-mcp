import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "finduserswithbrowsepermission",
  "toolDescription": "Find users with browse permission",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/user/viewissue/search",
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
    "query": {
      "query": "query",
      "username": "username",
      "accountId": "accountId",
      "issueKey": "issueKey",
      "projectKey": "projectKey",
      "startAt": "startAt",
      "maxResults": "maxResults"
    }
  },
  inputParamsSchema
}

export default tool