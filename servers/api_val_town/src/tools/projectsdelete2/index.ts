import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projectsdelete2",
  "toolDescription": "Delete a project",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    }
  },
  inputParamsSchema
}

export default tool