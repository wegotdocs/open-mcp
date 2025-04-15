import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removeteammember",
  "toolDescription": "Remove a Team Member",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/teams/{teamId}/members/{uid}",
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
      "uid": "uid"
    },
    "query": {
      "newDefaultTeamId": "newDefaultTeamId"
    }
  },
  inputParamsSchema
}

export default tool