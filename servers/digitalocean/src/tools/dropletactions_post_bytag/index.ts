import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dropletactions_post_bytag",
  "toolDescription": "Acting on Tagged Droplets",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets/actions",
  "method": "post",
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