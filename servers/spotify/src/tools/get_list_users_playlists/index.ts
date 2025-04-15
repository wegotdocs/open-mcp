import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_list_users_playlists",
  "toolDescription": "Get User's Playlists",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/users/{user_id}/playlists",
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
      "user_id": "user_id"
    },
    "query": {
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool