import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_load_balancer_protection",
  "toolDescription": "Change Load Balancer Protection",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancers/{id}/actions/change_protection",
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
      "delete": "delete"
    }
  },
  inputParamsSchema
}

export default tool