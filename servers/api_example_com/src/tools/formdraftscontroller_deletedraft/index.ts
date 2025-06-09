import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdraftscontroller_deletedraft",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/submissions/drafts/{draftId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "draftId": "draftId"
    }
  },
  inputParamsSchema
}

export default tool