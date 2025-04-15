import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search",
  "toolDescription": "Search statuses paginated",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/statuses/search",
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
      "expand": "expand",
      "projectId": "projectId",
      "startAt": "startAt",
      "maxResults": "maxResults",
      "searchString": "searchString",
      "statusCategory": "statusCategory"
    }
  },
  inputParamsSchema
}

export default tool