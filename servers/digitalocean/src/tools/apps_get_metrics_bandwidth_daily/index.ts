import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_metrics_bandwidth_daily",
  "toolDescription": "Retrieve App Daily Bandwidth Metrics",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{app_id}/metrics/bandwidth_daily",
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
    "path": {
      "app_id": "app_id"
    },
    "query": {
      "date": "date"
    }
  },
  inputParamsSchema
}

export default tool