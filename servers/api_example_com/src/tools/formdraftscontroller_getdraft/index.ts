import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdraftscontroller_getdraft",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/submissions/drafts/{draftId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "draftId": "draftId"
    }
  },
  inputParamsSchema
}

export default tool