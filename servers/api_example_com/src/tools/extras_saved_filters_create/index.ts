import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_saved_filters_create",
  "toolDescription": "Post a list of saved filter objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/saved-filters/",
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
      "slug": "slug",
      "description": "description",
      "user": "user",
      "weight": "weight",
      "enabled": "enabled",
      "shared": "shared",
      "parameters": "parameters"
    }
  },
  inputParamsSchema
}

export default tool