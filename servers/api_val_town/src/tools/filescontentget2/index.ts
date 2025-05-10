import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "filescontentget2",
  "toolDescription": "Download file content",
  "baseUrl": "https://api.val.town",
  "path": "/v2/vals/{val_id}/files/content",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "val_id": "val_id"
    },
    "query": {
      "version": "version",
      "branch_id": "branch_id",
      "path": "path"
    },
    "header": {
      "If-Match": "If-Match",
      "If-Unmodified-Since": "If-Unmodified-Since",
      "If-None-Match": "If-None-Match",
      "If-Modified-Since": "If-Modified-Since",
      "Cache-Control": "Cache-Control"
    }
  },
  inputParamsSchema
}

export default tool