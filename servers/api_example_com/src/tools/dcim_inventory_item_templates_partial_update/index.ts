import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_inventory_item_templates_partial_update",
  "toolDescription": "Patch a inventory item template object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/inventory-item-templates/{id}/",
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
      "device_type": "device_type",
      "parent": "parent",
      "name": "name",
      "label": "label",
      "role": "role",
      "manufacturer": "manufacturer",
      "part_id": "part_id",
      "description": "description",
      "component_type": "component_type",
      "component_id": "component_id"
    }
  },
  inputParamsSchema
}

export default tool