import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatedepartmentendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/departments/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool