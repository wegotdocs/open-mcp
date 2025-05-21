import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setstatususerendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/users/status/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool