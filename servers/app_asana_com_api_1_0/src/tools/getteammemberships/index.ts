import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getteammemberships",
  "toolDescription": "Get team memberships",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/team_memberships",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
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
      "team": "team",
      "user": "user",
      "workspace": "workspace",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool