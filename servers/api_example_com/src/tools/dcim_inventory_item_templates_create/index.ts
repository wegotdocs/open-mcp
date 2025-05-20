import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_inventory_item_templates_create",
  "toolDescription": "Post a list of inventory item template objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/inventory-item-templates/",
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