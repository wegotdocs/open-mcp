import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_export_templates_create",
  "toolDescription": "Post a list of export template objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/export-templates/",
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
      "name": "name",
      "description": "description",
      "environment_params": "environment_params",
      "template_code": "template_code",
      "mime_type": "mime_type",
      "file_name": "file_name",
      "file_extension": "file_extension",
      "as_attachment": "as_attachment",
      "data_source": "data_source"
    }
  },
  inputParamsSchema
}

export default tool