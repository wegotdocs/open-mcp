import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_volume_for_users_playback",
  "toolDescription": "Set Playback Volume",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/volume",
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
      "volume_percent": "volume_percent",
      "device_id": "device_id"
    }
  },
  inputParamsSchema
}

export default tool