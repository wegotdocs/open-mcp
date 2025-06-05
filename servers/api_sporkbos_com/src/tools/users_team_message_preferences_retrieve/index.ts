import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_team_message_preferences_retrieve",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/users/team-message-preferences/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "name": "name",
      "team": "team"
    }
  },
  inputParamsSchema
}

export default tool