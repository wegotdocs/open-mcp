import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_console_server_port_templates_update",
  "toolDescription": "Put a console server port template object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/console-server-port-templates/{id}/",
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
      "device_type": "device_type",
      "module_type": "module_type",
      "name": "name",
      "label": "label",
      "type": "type",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool