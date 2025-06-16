import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_service",
  "toolDescription": "Delete Service",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancers/{id}/actions/delete_service",
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
      "listen_port": "listen_port"
    }
  },
  inputParamsSchema
}

export default tool