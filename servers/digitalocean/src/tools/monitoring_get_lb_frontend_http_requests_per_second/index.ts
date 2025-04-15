import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_get_lb_frontend_http_requests_per_second",
  "toolDescription": "Get Load Balancer Frontend HTTP Requests Metrics",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/metrics/load_balancer/frontend_http_requests_per_second",
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
      "lb_id": "lb_id",
      "start": "start",
      "end": "end"
    }
  },
  inputParamsSchema
}

export default tool