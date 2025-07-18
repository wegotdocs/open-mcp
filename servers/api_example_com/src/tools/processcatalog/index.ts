import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "processcatalog",
  "toolDescription": "Loading or updating a catalog in the system.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/catalog/process",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "description": "description",
      "secretName": "secretName",
      "schema": "schema",
      "definitionsContent": "definitionsContent",
      "dataBaseEngineId": "dataBaseEngineId"
    }
  },
  inputParamsSchema
}

export default tool