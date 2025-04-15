import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findgroups",
  "toolDescription": "Find groups",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/groups/picker",
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
      "accountId": "accountId",
      "query": "query",
      "exclude": "exclude",
      "excludeId": "excludeId",
      "maxResults": "maxResults",
      "caseInsensitive": "caseInsensitive",
      "userName": "userName"
    }
  },
  inputParamsSchema
}

export default tool