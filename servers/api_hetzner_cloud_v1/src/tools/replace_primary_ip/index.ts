import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "replace_primary_ip",
  "toolDescription": "Update a Primary IP",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/primary_ips/{id}",
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
      "auto_delete": "auto_delete",
      "labels": "labels",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool