import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_module_bays_update",
  "toolDescription": "Put a module bay object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/module-bays/{id}/",
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
      "device": "device",
      "module": "module",
      "name": "name",
      "installed_module": "installed_module",
      "label": "label",
      "position": "position",
      "description": "description",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool