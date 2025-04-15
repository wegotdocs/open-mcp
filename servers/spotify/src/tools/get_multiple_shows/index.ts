import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_multiple_shows",
  "toolDescription": "Get Several Shows",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/shows",
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
      "market": "market",
      "ids": "ids"
    }
  },
  inputParamsSchema
}

export default tool