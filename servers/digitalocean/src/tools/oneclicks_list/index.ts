import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oneclicks_list",
  "toolDescription": "List 1-Click Applications",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/1-clicks",
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
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool