import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ai_chat_api_ai_chat_post",
  "toolDescription": "Ai Chat",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/chat",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "message": "message",
      "conversation_history": "conversation_history"
    }
  },
  inputParamsSchema
}

export default tool