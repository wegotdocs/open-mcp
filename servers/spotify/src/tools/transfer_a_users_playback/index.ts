import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transfer_a_users_playback",
  "toolDescription": "Transfer Playback",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/player",
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
    "body": {
      "device_ids": "device_ids",
      "play": "play"
    }
  },
  inputParamsSchema
}

export default tool