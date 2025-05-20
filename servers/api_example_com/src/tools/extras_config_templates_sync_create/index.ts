import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_config_templates_sync_create",
  "toolDescription": "Provide a /sync API endpoint to synchronize an object's data from its associated DataFile (if any).",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/config-templates/{id}/sync/",
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
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "environment_params": "environment_params",
      "template_code": "template_code",
      "mime_type": "mime_type",
      "file_name": "file_name",
      "file_extension": "file_extension",
      "as_attachment": "as_attachment",
      "data_source": "data_source",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool