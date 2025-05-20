import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "circuits_providers_create",
  "toolDescription": "Post a list of provider objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/circuits/providers/",
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
      "slug": "slug",
      "accounts": "accounts",
      "description": "description",
      "comments": "comments",
      "asns": "asns",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool