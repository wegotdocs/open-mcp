import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getassistantstremingconversation",
  "toolDescription": "Send to Signal answers by streaming using assistant",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/chat/assistantConversation/streaming",
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
    },
    "body": {
      "prompt": "prompt",
      "conversationId": "conversationId",
      "threadId": "threadId"
    },
    "header": {
      "connectionId": "connectionId"
    }
  },
  inputParamsSchema
}

export default tool