import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "floatingipsaction_get",
  "toolDescription": "Retrieve an Existing Floating IP Action",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/floating_ips/{floating_ip}/actions/{action_id}",
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
      "floating_ip": "floating_ip",
      "action_id": "action_id"
    }
  },
  inputParamsSchema
}

export default tool