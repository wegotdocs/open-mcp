import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletefaqendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/faqs/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool