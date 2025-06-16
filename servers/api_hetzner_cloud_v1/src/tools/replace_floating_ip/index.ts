import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "replace_floating_ip",
  "toolDescription": "Update a Floating IP",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/floating_ips/{id}",
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
      "description": "description",
      "labels": "labels",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool