import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_categories",
  "toolDescription": "Get Several Browse Categories",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/browse/categories",
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
      "locale": "locale",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool