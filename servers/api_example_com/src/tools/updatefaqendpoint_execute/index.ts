import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefaqendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/faqs/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "question": "question",
      "answer": "answer",
      "order": "order",
      "isDraft": "isDraft"
    }
  },
  inputParamsSchema
}

export default tool