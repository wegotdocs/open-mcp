import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteteam",
  "toolDescription": "Delete a Team",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/teams/{teamId}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "teamId": "teamId"
    },
    "query": {
      "newDefaultTeamId": "newDefaultTeamId",
      "slug": "slug"
    },
    "body": {
      "reasons": "reasons"
    }
  },
  inputParamsSchema
}

export default tool