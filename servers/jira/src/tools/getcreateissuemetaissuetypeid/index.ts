import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcreateissuemetaissuetypeid",
  "toolDescription": "Get create field metadata for a project and issue type id",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes/{issueTypeId}",
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
      "projectIdOrKey": "projectIdOrKey",
      "issueTypeId": "issueTypeId"
    },
    "query": {
      "startAt": "startAt",
      "maxResults": "maxResults"
    }
  },
  inputParamsSchema
}

export default tool