import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "follow_playlist",
  "toolDescription": "Follow Playlist",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}/followers",
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
    "path": {
      "playlist_id": "playlist_id"
    },
    "body": {
      "public": "public"
    }
  },
  inputParamsSchema
}

export default tool