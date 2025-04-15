import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_recently_played",
  "toolDescription": "Get Recently Played Tracks",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/recently-played",
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
      "limit": "limit",
      "after": "after",
      "before": "before"
    }
  },
  inputParamsSchema
}

export default tool