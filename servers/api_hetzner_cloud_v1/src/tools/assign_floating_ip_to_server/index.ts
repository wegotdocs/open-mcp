import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assign_floating_ip_to_server",
  "toolDescription": "Assign a Floating IP to a Server",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/floating_ips/{id}/actions/assign",
  "method": "post",
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
    "body": {
      "server": "server"
    }
  },
  inputParamsSchema
}

export default tool