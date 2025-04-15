import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addsecuritylevelmembers",
  "toolDescription": "Add issue security level members",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member",
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
      "schemeId": "schemeId",
      "levelId": "levelId"
    },
    "body": {
      "members": "members"
    }
  },
  inputParamsSchema
}

export default tool