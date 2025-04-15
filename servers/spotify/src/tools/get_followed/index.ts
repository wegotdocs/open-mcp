import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_followed",
  "toolDescription": "Get Followed Artists",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/following",
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
    "query": {
      "type": "type",
      "after": "after",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool