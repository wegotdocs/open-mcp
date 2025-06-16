import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "detach_server_from_network",
  "toolDescription": "Detach a Server from a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/detach_from_network",
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
      "network": "network"
    }
  },
  inputParamsSchema
}

export default tool