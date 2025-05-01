import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "brancheslist2",
  "toolDescription": "List all branches for a val",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/branches",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    },
    "query": {
      "offset": "offset",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool