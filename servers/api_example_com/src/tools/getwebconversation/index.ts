import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwebconversation",
  "toolDescription": "Get answers using embeddings of content of webs and OpenAI APIs",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/chat/webConversation",
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