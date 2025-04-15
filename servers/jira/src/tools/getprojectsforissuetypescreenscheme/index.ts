import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojectsforissuetypescreenscheme",
  "toolDescription": "Get issue type screen scheme projects",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/project",
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
      "issueTypeScreenSchemeId": "issueTypeScreenSchemeId"
    },
    "query": {
      "startAt": "startAt",
      "maxResults": "maxResults",
      "query": "query"
    }
  },
  inputParamsSchema
}

export default tool