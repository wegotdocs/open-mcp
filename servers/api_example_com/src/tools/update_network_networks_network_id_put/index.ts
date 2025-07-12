import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_network_networks_network_id_put",
  "toolDescription": "Update network settings",
  "baseUrl": "https://api.example.com",
  "path": "/networks/{network_id}",
  "method": "put",
  "security": [
    {
      "key": "X-API-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "network_id": "network_id"
    },
    "body": {
      "name": "name",
      "label": "label"
    }
  },
  inputParamsSchema
}

export default tool