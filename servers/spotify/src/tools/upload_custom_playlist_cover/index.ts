import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_custom_playlist_cover",
  "toolDescription": "Add Custom Playlist Cover Image",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}/images",
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
    }
  },
  inputParamsSchema
}

export default tool