import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "skip_users_playback_to_next_track",
  "toolDescription": "Skip To Next",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player/next",
  "method": "post",
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