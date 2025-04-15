import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "autoscalepools_list",
  "toolDescription": "List All Autoscale Pools",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets/autoscale",
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
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool