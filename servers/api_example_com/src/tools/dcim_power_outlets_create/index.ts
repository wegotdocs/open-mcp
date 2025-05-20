import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_power_outlets_create",
  "toolDescription": "Post a list of power outlet objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/power-outlets/",
  "method": "post",
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
    "body": {
      "device": "device",
      "module": "module",
      "name": "name",
      "label": "label",
      "type": "type",
      "status": "status",
      "color": "color",
      "power_port": "power_port",
      "feed_leg": "feed_leg",
      "description": "description",
      "mark_connected": "mark_connected",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool