import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_saved_filters_partial_update",
  "toolDescription": "Patch a saved filter object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/saved-filters/{id}/",
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