import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "attach_server_to_network",
  "toolDescription": "Attach a Server to a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/attach_to_network",
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
      "alias_ips": "alias_ips",
      "ip": "ip",
      "network": "network"
    }
  },
  inputParamsSchema
}

export default tool