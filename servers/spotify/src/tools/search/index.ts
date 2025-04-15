import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search",
  "toolDescription": "Search for Item",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/search",
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
      "q": "q",
      "type": "type",
      "market": "market",
      "limit": "limit",
      "offset": "offset",
      "include_external": "include_external"
    }
  },
  inputParamsSchema
}

export default tool