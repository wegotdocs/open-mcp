import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_custom_links_update",
  "toolDescription": "Put a custom link object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/custom-links/{id}/",
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
      "object_types": "object_types",
      "name": "name",
      "enabled": "enabled",
      "link_text": "link_text",
      "link_url": "link_url",
      "weight": "weight",
      "group_name": "group_name",
      "button_class": "button_class",
      "new_window": "new_window"
    }
  },
  inputParamsSchema
}

export default tool