import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postprompt",
  "toolDescription": "Insert prompt into the database associated with an existing use case",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/prompt",
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
      "name": "name",
      "description": "description",
      "value": "value",
      "promptType": "promptType",
      "active": "active",
      "useCaseId": "useCaseId"
    }
  },
  inputParamsSchema
}

export default tool