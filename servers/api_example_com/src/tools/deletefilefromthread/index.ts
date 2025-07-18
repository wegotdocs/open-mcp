import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletefilefromthread",
  "toolDescription": "Desassign a file of a thread (does not delete the file)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/assistant/{assistantId}/usecase/{useCaseId}/thread/data",
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
      "useCaseId": "useCaseId"
    },
    "body": {
      "threadId": "threadId",
      "fileId": "fileId"
    }
  },
  inputParamsSchema
}

export default tool