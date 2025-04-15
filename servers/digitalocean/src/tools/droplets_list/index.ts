import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "droplets_list",
  "toolDescription": "List All Droplets",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets",
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
      "tag_name": "tag_name",
      "name": "name",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool