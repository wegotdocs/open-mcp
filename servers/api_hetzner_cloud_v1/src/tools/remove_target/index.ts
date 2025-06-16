import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_target",
  "toolDescription": "Remove Target",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancers/{id}/actions/remove_target",
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
      "ip": "ip",
      "label_selector": "label_selector",
      "server": "server",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool