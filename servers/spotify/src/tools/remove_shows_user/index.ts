import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_shows_user",
  "toolDescription": "Remove User's Saved Shows",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/shows",
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
    "query": {
      "ids": "ids",
      "market": "market"
    },
    "body": {
      "ids": "b_ids"
    }
  },
  inputParamsSchema
}

export default tool