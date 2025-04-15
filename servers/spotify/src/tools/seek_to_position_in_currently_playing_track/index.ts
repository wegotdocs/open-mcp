import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "seek_to_position_in_currently_playing_track",
  "toolDescription": "Seek To Position",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/seek",
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
      "position_ms": "position_ms",
      "device_id": "device_id"
    }
  },
  inputParamsSchema
}

export default tool