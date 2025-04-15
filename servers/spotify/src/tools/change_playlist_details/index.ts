import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_playlist_details",
  "toolDescription": "Change Playlist Details",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}",
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
      "name": "name",
      "public": "public",
      "collaborative": "collaborative",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool