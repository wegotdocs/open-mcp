import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_an_artists_albums",
  "toolDescription": "Get Artist's Albums",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/artists/{id}/albums",
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
      "id": "id"
    },
    "query": {
      "include_groups": "include_groups",
      "market": "market",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool