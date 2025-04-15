import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "droplets_destroy_bytag",
  "toolDescription": "Deleting Droplets by Tag",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets",
  "method": "delete",
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
      "tag_name": "tag_name"
    }
  },
  inputParamsSchema
}

export default tool