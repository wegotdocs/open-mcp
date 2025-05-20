import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_racks_create",
  "toolDescription": "Post a list of rack objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/racks/",
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
      "name": "name",
      "facility_id": "facility_id",
      "site": "site",
      "location": "location",
      "tenant": "tenant",
      "status": "status",
      "role": "role",
      "serial": "serial",
      "asset_tag": "asset_tag",
      "rack_type": "rack_type",
      "form_factor": "form_factor",
      "width": "width",
      "u_height": "u_height",
      "starting_unit": "starting_unit",
      "weight": "weight",
      "max_weight": "max_weight",
      "weight_unit": "weight_unit",
      "desc_units": "desc_units",
      "outer_width": "outer_width",
      "outer_height": "outer_height",
      "outer_depth": "outer_depth",
      "outer_unit": "outer_unit",
      "mounting_depth": "mounting_depth",
      "airflow": "airflow",
      "description": "description",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool