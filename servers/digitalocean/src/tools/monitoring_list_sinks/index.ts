import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_list_sinks",
  "toolDescription": "Lists all sinks",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/sinks",
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
      "resource_id": "resource_id"
    }
  },
  inputParamsSchema
}

export default tool