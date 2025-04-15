import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_get_droplet_autoscale_target_memory_utilization",
  "toolDescription": "Get Droplet Autoscale Pool Target Average Memory utilization",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/metrics/droplet_autoscale/target_memory_utilization",
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
      "autoscale_pool_id": "autoscale_pool_id",
      "start": "start",
      "end": "end"
    }
  },
  inputParamsSchema
}

export default tool