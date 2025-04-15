import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_playlist",
  "toolDescription": "Create Playlist",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/users/{user_id}/playlists",
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
      "user_id": "user_id"
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