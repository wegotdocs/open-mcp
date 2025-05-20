import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_inventory_items_create",
  "toolDescription": "Post a list of inventory item objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/inventory-items/",
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
      "parent": "parent",
      "name": "name",
      "label": "label",
      "status": "status",
      "role": "role",
      "manufacturer": "manufacturer",
      "part_id": "part_id",
      "serial": "serial",
      "asset_tag": "asset_tag",
      "discovered": "discovered",
      "description": "description",
      "component_type": "component_type",
      "component_id": "component_id",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool