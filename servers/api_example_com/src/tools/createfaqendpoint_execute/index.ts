import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfaqendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/faqs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "question": "question",
      "answer": "answer",
      "order": "order",
      "isDraft": "isDraft",
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool