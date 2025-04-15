import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_if_user_follows_playlist",
  "toolDescription": "Check if Current User Follows Playlist",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}/followers/contains",
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
    "path": {
      "playlist_id": "playlist_id"
    },
    "query": {
      "ids": "ids"
    }
  },
  inputParamsSchema
}

export default tool