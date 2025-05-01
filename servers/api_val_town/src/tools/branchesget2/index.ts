import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "branchesget2",
  "toolDescription": "Get a branch by id",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/branches/{branch_id}",
  "method": "get",
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