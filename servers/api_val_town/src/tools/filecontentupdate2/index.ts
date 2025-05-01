import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "filecontentupdate2",
  "toolDescription": "Update a file's content",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/files",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    },
    "query": {
      "branch_id": "branch_id",
      "path": "path"
    },
    "body": {
      "content": "content",
      "type": "type",
      "parent_path": "parent_path",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool