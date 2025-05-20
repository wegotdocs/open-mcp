import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_device_roles_partial_update",
  "toolDescription": "Patch a device role object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/device-roles/{id}/",
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
      "name": "name",
      "slug": "slug",
      "color": "color",
      "vm_role": "vm_role",
      "config_template": "config_template",
      "parent": "parent",
      "description": "description",
      "tags": "tags",
      "custom_fields": "custom_fields",
      "comments": "comments"
    }
  },
  inputParamsSchema
}

export default tool