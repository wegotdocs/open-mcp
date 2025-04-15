import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getissuesecuritylevelmembers",
  "toolDescription": "Get issue security level members by issue security scheme",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issuesecurityschemes/{issueSecuritySchemeId}/members",
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
      "issueSecuritySchemeId": "issueSecuritySchemeId"
    },
    "query": {
      "startAt": "startAt",
      "maxResults": "maxResults",
      "issueSecurityLevelId": "issueSecurityLevelId",
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool