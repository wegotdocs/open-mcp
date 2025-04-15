import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unfollow_artists_users",
  "toolDescription": "Unfollow Artists or Users",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/following",
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
      "type": "type",
      "ids": "ids"
    },
    "body": {
      "ids": "b_ids"
    }
  },
  inputParamsSchema
}

export default tool