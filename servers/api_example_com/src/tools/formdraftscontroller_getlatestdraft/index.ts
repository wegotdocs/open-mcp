import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdraftscontroller_getlatestdraft",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/submissions/{id}/drafts/latest",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool