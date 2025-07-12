import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_network_networks_create_network_post",
  "toolDescription": "Create private network",
  "baseUrl": "https://api.example.com",
  "path": "/networks/create_network",
  "method": "post",
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
    "body": {
      "name": "name",
      "label": "label",
      "location_name": "location_name",
      "ip_range": "ip_range",
      "prefix": "prefix",
      "project_id": "project_id"
    }
  },
  inputParamsSchema
}

export default tool