import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "replace_firewall",
  "toolDescription": "Update a Firewall",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/firewalls/{id}",
  "method": "put",
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
      "labels": "labels",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool