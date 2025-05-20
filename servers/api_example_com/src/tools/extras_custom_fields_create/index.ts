import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_custom_fields_create",
  "toolDescription": "Post a list of custom field objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/custom-fields/",
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
      "object_types": "object_types",
      "type": "type",
      "related_object_type": "related_object_type",
      "name": "name",
      "label": "label",
      "group_name": "group_name",
      "description": "description",
      "required": "required",
      "unique": "unique",
      "search_weight": "search_weight",
      "filter_logic": "filter_logic",
      "ui_visible": "ui_visible",
      "ui_editable": "ui_editable",
      "is_cloneable": "is_cloneable",
      "default": "default",
      "related_object_filter": "related_object_filter",
      "weight": "weight",
      "validation_minimum": "validation_minimum",
      "validation_maximum": "validation_maximum",
      "validation_regex": "validation_regex",
      "choice_set": "choice_set",
      "comments": "comments"
    }
  },
  inputParamsSchema
}

export default tool