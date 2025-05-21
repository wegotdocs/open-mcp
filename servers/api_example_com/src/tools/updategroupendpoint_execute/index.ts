import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updategroupendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/groups/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "icon": "icon"
    }
  },
  inputParamsSchema
}

export default tool