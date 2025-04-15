import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_get_appcpupercentagemetrics",
  "toolDescription": "Get App CPU Percentage Metrics",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/metrics/apps/cpu_percentage",
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
      "app_id": "app_id",
      "app_component": "app_component",
      "start": "start",
      "end": "end"
    }
  },
  inputParamsSchema
}

export default tool