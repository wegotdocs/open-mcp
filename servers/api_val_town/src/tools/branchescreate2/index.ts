import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "branchescreate2",
  "toolDescription": "Create a new branch",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/branches",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    },
    "body": {
      "name": "name",
      "branchId": "branchId"
    }
  },
  inputParamsSchema
}

export default tool