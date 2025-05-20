import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_power_ports_partial_update",
  "toolDescription": "Patch a power port object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/power-ports/{id}/",
  "method": "patch",
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
      "device": "device",
      "module": "module",
      "name": "name",
      "label": "label",
      "type": "type",
      "maximum_draw": "maximum_draw",
      "allocated_draw": "allocated_draw",
      "description": "description",
      "mark_connected": "mark_connected",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool