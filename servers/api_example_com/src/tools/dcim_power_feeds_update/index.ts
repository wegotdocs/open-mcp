import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_power_feeds_update",
  "toolDescription": "Put a power feed object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/power-feeds/{id}/",
  "method": "put",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "power_panel": "power_panel",
      "rack": "rack",
      "name": "name",
      "status": "status",
      "type": "type",
      "supply": "supply",
      "phase": "phase",
      "voltage": "voltage",
      "amperage": "amperage",
      "max_utilization": "max_utilization",
      "mark_connected": "mark_connected",
      "description": "description",
      "tenant": "tenant",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool