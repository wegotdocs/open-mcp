import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getteams",
  "toolDescription": "List all teams",
  "baseUrl": "https://api.vercel.com",
  "path": "/v2/teams",
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
      "limit": "limit",
      "since": "since",
      "until": "until"
    }
  },
  inputParamsSchema
}

export default tool