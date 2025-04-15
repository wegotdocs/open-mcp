import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "loadbalancers_update",
  "toolDescription": "Update a Load Balancer",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/load_balancers/{lb_id}",
  "method": "put",
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
      "lb_id": "lb_id"
    }
  },
  inputParamsSchema
}

export default tool