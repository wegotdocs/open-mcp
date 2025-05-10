import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "filescreate2",
  "toolDescription": "Create a new file, project val or directory",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/files",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    },
    "query": {
      "branch_id": "branch_id",
      "path": "path"
    }
  },
  inputParamsSchema
}

export default tool