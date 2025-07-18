import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addfiletothread",
  "toolDescription": "Uploads a file to OpenAI assistants and assign to a UseCase (The use case type must be type OAIAssistant)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/assistant/{assistantId}/usecase/{useCaseId}/thread/data",
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
    "path": {
      "assistantId": "assistantId",
      "useCaseId": "useCaseId"
    },
    "body": {
      "File": "File",
      "ThreadId": "ThreadId"
    }
  },
  inputParamsSchema
}

export default tool