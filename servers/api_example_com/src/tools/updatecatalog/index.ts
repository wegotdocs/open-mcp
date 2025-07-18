import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecatalog",
  "toolDescription": "Update catalog.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/catalog/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "schema": "schema",
      "secretName": "secretName",
      "active": "active",
      "definitionsContent": "definitionsContent"
    }
  },
  inputParamsSchema
}

export default tool