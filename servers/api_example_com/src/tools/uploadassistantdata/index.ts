import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadassistantdata",
  "toolDescription": "Uploads a file to OpenAI assistants",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/assistant/{assistantId}/data",
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
      "assistantId": "assistantId"
    },
    "body": {
      "File": "File"
    }
  },
  inputParamsSchema
}

export default tool