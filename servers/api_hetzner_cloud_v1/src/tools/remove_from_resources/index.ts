import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_from_resources",
  "toolDescription": "Remove from Resources",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/firewalls/{id}/actions/remove_from_resources",
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
      "remove_from": "remove_from"
    }
  },
  inputParamsSchema
}

export default tool