import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "completions",
  "toolDescription": "[chat]生成式AI聊天",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/chat/completions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "model": "model",
      "messages": "messages",
      "frequency_penalty": "frequency_penalty",
      "n": "n",
      "presence_penalty": "presence_penalty",
      "stream": "stream",
      "temperature": "temperature",
      "top_p": "top_p"
    }
  },
  inputParamsSchema
}

export default tool