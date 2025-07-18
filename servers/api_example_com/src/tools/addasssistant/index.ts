import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addasssistant",
  "toolDescription": "Insert a new assistant into the database",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/assistant",
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
      "assistantOpenaiId": "assistantOpenaiId",
      "resourceId": "resourceId"
    }
  },
  inputParamsSchema
}

export default tool