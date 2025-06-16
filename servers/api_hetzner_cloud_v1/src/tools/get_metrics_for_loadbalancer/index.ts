import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_metrics_for_loadbalancer",
  "toolDescription": "Get Metrics for a LoadBalancer",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancers/{id}/metrics",
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
      "id": "id"
    },
    "query": {
      "type": "type",
      "start": "start",
      "end": "end",
      "step": "step"
    }
  },
  inputParamsSchema
}

export default tool