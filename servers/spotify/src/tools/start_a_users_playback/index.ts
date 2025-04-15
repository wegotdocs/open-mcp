import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "start_a_users_playback",
  "toolDescription": "Start/Resume Playback",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/play",
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
    },
    "body": {
      "context_uri": "context_uri",
      "uris": "uris",
      "offset": "offset",
      "position_ms": "position_ms"
    }
  },
  inputParamsSchema
}

export default tool