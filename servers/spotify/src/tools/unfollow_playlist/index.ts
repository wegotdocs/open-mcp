import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unfollow_playlist",
  "toolDescription": "Unfollow Playlist",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}/followers",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool