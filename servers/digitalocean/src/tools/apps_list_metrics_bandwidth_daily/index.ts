import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_list_metrics_bandwidth_daily",
  "toolDescription": "Retrieve Multiple Apps' Daily Bandwidth Metrics",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/metrics/bandwidth_daily",
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
    "body": {
      "app_ids": "app_ids",
      "date": "date"
    }
  },
  inputParamsSchema
}

export default tool