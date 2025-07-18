import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdatabaseconversation",
  "toolDescription": "Get answers using tables structure and OpenAI APIs",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/chat/databaseConversation",
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
    "query": {
      "useCaseId": "useCaseId"
    }
  },
  inputParamsSchema
}

export default tool