import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_playlist",
  "toolDescription": "Get Playlist",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/playlists/{playlist_id}",
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
      "market": "market",
      "fields": "fields",
      "additional_types": "additional_types"
    }
  },
  inputParamsSchema
}

export default tool