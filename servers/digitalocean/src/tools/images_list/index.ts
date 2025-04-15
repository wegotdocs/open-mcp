import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "images_list",
  "toolDescription": "List All Images",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/images",
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
      "type": "type",
      "private": "private",
      "tag_name": "tag_name",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool