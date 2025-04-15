import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "spaceskey_list",
  "toolDescription": "List Spaces Access Keys",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/spaces/keys",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "per_page": "per_page",
      "page": "page",
      "sort": "sort",
      "sort_direction": "sort_direction",
      "name": "name",
      "bucket": "bucket",
      "permission": "permission"
    }
  },
  inputParamsSchema
}

export default tool