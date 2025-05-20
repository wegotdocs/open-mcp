import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_rack_types_update",
  "toolDescription": "Put a rack type object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/rack-types/{id}/",
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
      "manufacturer": "manufacturer",
      "model": "model",
      "slug": "slug",
      "description": "description",
      "form_factor": "form_factor",
      "width": "width",
      "u_height": "u_height",
      "starting_unit": "starting_unit",
      "desc_units": "desc_units",
      "outer_width": "outer_width",
      "outer_height": "outer_height",
      "outer_depth": "outer_depth",
      "outer_unit": "outer_unit",
      "weight": "weight",
      "max_weight": "max_weight",
      "weight_unit": "weight_unit",
      "mounting_depth": "mounting_depth",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool