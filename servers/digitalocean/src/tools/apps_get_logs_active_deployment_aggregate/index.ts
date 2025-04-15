import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_logs_active_deployment_aggregate",
  "toolDescription": "Retrieve Active Deployment Aggregate Logs",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{app_id}/logs",
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
      "follow": "follow",
      "type": "type",
      "pod_connection_timeout": "pod_connection_timeout"
    }
  },
  inputParamsSchema
}

export default tool