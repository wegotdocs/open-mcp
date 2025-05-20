import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_locations_update",
  "toolDescription": "Put a location object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/locations/{id}/",
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
      "name": "name",
      "slug": "slug",
      "site": "site",
      "parent": "parent",
      "status": "status",
      "tenant": "tenant",
      "facility": "facility",
      "description": "description",
      "tags": "tags",
      "custom_fields": "custom_fields",
      "comments": "comments"
    }
  },
  inputParamsSchema
}

export default tool