import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "filesdelete2",
  "toolDescription": "Deletes a file or a directory. To delete a directory and all of its children, use the recursive flag. To delete all files, pass in an empty path and the recursive flag.",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/files",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    },
    "query": {
      "branch_id": "branch_id",
      "path": "path",
      "recursive": "recursive"
    }
  },
  inputParamsSchema
}

export default tool