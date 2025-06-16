import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_service",
  "toolDescription": "Add Service",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancers/{id}/actions/add_service",
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
      "destination_port": "destination_port",
      "health_check": "health_check",
      "http": "http",
      "listen_port": "listen_port",
      "protocol": "protocol",
      "proxyprotocol": "proxyprotocol"
    }
  },
  inputParamsSchema
}

export default tool