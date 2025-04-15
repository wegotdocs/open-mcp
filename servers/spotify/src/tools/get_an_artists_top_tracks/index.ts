import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_an_artists_top_tracks",
  "toolDescription": "Get Artist's Top Tracks",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/artists/{id}/top-tracks",
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
      "market": "market"
    }
  },
  inputParamsSchema
}

export default tool