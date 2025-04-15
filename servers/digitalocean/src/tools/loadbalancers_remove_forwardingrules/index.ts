import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "loadbalancers_remove_forwardingrules",
  "toolDescription": "Remove Forwarding Rules from a Load Balancer",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/load_balancers/{lb_id}/forwarding_rules",
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
    },
    "body": {
      "forwarding_rules": "forwarding_rules"
    }
  },
  inputParamsSchema
}

export default tool