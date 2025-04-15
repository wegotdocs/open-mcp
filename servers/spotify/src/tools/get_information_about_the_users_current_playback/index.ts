import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_information_about_the_users_current_playback",
  "toolDescription": "Get Playback State",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player",
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