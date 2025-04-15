import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_repeat_mode_on_users_playback",
  "toolDescription": "Set Repeat Mode",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/repeat",
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
      "state": "state",
      "device_id": "device_id"
    }
  },
  inputParamsSchema
}

export default tool