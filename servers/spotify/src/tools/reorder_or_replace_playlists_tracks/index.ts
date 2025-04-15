import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reorder_or_replace_playlists_tracks",
  "toolDescription": "Update Playlist Items",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}/tracks",
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
    "query": {
      "uris": "uris"
    },
    "body": {
      "uris": "b_uris",
      "range_start": "range_start",
      "insert_before": "insert_before",
      "range_length": "range_length",
      "snapshot_id": "snapshot_id"
    }
  },
  inputParamsSchema
}

export default tool