import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateassistant",
  "toolDescription": "Update Assistant",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/assistant/{assistantId}",
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
      "assistantId": "assistantId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "assistantOpenaiId": "assistantOpenaiId",
      "active": "active",
      "resourceId": "resourceId"
    }
  },
  inputParamsSchema
}

export default tool