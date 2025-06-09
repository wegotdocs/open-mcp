import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdraftscontroller_updatedraft",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/submissions/{id}/drafts/{draftId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id",
      "draftId": "draftId"
    },
    "header": {
      "ntx-draft-name": "ntx-draft-name"
    }
  },
  inputParamsSchema
}

export default tool