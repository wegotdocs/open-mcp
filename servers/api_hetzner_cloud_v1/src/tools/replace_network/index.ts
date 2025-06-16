import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "replace_network",
  "toolDescription": "Update a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/networks/{id}",
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
      "expose_routes_to_vswitch": "expose_routes_to_vswitch",
      "labels": "labels",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool