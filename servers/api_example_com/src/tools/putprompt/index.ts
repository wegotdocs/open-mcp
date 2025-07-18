import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putprompt",
  "toolDescription": "Update prompt into the database associated with an existing use case",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/prompt/{id}",
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
      "value": "value",
      "promptType": "promptType",
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool