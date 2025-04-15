import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_tracks_playlist",
  "toolDescription": "Remove Playlist Items",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}/tracks",
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
    },
    "body": {
      "tracks": "tracks",
      "snapshot_id": "snapshot_id"
    }
  },
  inputParamsSchema
}

export default tool