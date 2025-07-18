import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletethread",
  "toolDescription": "Deletes a thread and the vector store associated if exists",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/assistant/{assistantId}/usecase/{useCaseId}/thread/{threadId}",
  "method": "delete",
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
      "assistantId": "assistantId",
      "useCaseId": "useCaseId",
      "threadId": "threadId"
    }
  },
  inputParamsSchema
}

export default tool