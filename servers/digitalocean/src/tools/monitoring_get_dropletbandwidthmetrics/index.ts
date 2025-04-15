import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_get_dropletbandwidthmetrics",
  "toolDescription": "Get Droplet Bandwidth Metrics",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/metrics/droplet/bandwidth",
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
      "host_id": "host_id",
      "interface": "interface",
      "direction": "direction",
      "start": "start",
      "end": "end"
    }
  },
  inputParamsSchema
}

export default tool