import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pause_a_users_playback",
  "toolDescription": "Pause Playback",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/pause",
  "method": "put",
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
      "device_id": "device_id"
    }
  },
  inputParamsSchema
}

export default tool