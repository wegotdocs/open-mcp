import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_module_types_create",
  "toolDescription": "Post a list of module type objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/module-types/",
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
      "profile": "profile",
      "manufacturer": "manufacturer",
      "model": "model",
      "part_number": "part_number",
      "airflow": "airflow",
      "weight": "weight",
      "weight_unit": "weight_unit",
      "description": "description",
      "attributes": "attributes",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool