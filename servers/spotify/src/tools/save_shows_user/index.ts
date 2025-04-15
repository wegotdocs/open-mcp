import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "save_shows_user",
  "toolDescription": "Save Shows for Current User",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/shows",
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
    "query": {
      "ids": "ids"
    },
    "body": {
      "ids": "b_ids"
    }
  },
  inputParamsSchema
}

export default tool