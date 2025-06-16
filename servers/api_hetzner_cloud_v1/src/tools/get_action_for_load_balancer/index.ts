import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_action_for_load_balancer",
  "toolDescription": "Get an Action for a Load Balancer",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancers/{id}/actions/{action_id}",
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
      "id": "id",
      "action_id": "action_id"
    }
  },
  inputParamsSchema
}

export default tool