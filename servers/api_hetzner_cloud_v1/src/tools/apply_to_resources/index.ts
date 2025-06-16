import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apply_to_resources",
  "toolDescription": "Apply to Resources",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/firewalls/{id}/actions/apply_to_resources",
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
      "apply_to": "apply_to"
    }
  },
  inputParamsSchema
}

export default tool