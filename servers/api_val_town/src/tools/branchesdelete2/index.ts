import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "branchesdelete2",
  "toolDescription": "Delete a branch",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/branches/{branch_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id",
      "branch_id": "branch_id"
    }
  },
  inputParamsSchema
}

export default tool