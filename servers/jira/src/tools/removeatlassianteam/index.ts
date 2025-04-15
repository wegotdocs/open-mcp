import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removeatlassianteam",
  "toolDescription": "Remove Atlassian team from plan",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId}",
  "method": "delete",
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
      "planId": "planId",
      "atlassianTeamId": "atlassianTeamId"
    }
  },
  inputParamsSchema
}

export default tool