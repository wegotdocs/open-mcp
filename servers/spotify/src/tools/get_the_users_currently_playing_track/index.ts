import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_users_currently_playing_track",
  "toolDescription": "Get Currently Playing Track",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/currently-playing",
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
      "market": "market",
      "additional_types": "additional_types"
    }
  },
  inputParamsSchema
}

export default tool