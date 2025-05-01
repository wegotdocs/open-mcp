import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "valfilesget2",
  "toolDescription": "Get metadata for files and directories in a val. If path is an empty string, returns files at the root directory.",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/files",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    },
    "query": {
      "version": "version",
      "branch_id": "branch_id",
      "path": "path",
      "recursive": "recursive",
      "offset": "offset",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool