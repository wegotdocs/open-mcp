import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users_top_artists",
  "toolDescription": "Get User's Top Artists",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/top/artists",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "time_range": "time_range",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool