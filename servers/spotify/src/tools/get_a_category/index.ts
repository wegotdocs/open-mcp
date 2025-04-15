import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_a_category",
  "toolDescription": "Get Single Browse Category",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/browse/categories/{category_id}",
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
      "category_id": "category_id"
    },
    "query": {
      "locale": "locale"
    }
  },
  inputParamsSchema
}

export default tool