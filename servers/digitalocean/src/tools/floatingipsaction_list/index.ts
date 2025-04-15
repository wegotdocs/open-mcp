import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "floatingipsaction_list",
  "toolDescription": "List All Actions for a Floating IP",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/floating_ips/{floating_ip}/actions",
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
      "floating_ip": "floating_ip"
    }
  },
  inputParamsSchema
}

export default tool