import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_tracks_to_playlist",
  "toolDescription": "Add Items to Playlist",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}/tracks",
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
    "path": {
      "playlist_id": "playlist_id"
    },
    "query": {
      "position": "position",
      "uris": "uris"
    },
    "body": {
      "uris": "b_uris",
      "position": "b_position"
    }
  },
  inputParamsSchema
}

export default tool