import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdraftscontroller_savedraft",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/submissions/{id}/drafts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "header": {
      "ntx-draft-name": "ntx-draft-name"
    }
  },
  inputParamsSchema
}

export default tool