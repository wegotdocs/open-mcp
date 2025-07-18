import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getassistantdata",
  "toolDescription": "Uploads a file to OpenAI assistants",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/assistant/{assistantId}/data/{fileId}",
  "method": "get",
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
      "fileId": "fileId"
    }
  },
  inputParamsSchema
}

export default tool