import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getteam",
  "toolDescription": "Get a Team",
  "baseUrl": "https://api.vercel.com",
  "path": "/v2/teams/{teamId}",
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
    "path": {
      "teamId": "teamId"
    },
    "query": {
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool