import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "loadbalancers_delete_cache",
  "toolDescription": "Delete a Global Load Balancer CDN Cache",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/load_balancers/{lb_id}/cache",
  "method": "delete",
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