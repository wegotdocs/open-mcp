import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findassignableusers",
  "toolDescription": "Find users assignable to issues",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/user/assignable/search",
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
      "sessionId": "sessionId",
      "username": "username",
      "accountId": "accountId",
      "project": "project",
      "issueKey": "issueKey",
      "issueId": "issueId",
      "startAt": "startAt",
      "maxResults": "maxResults",
      "actionDescriptorId": "actionDescriptorId",
      "recommend": "recommend"
    }
  },
  inputParamsSchema
}

export default tool