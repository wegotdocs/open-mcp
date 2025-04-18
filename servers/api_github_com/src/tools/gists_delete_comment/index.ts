import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_delete_comment",
  "toolDescription": "Delete a gist comment",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}/comments/{comment_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id",
      "comment_id": "comment_id"
    }
  },
  inputParamsSchema
}

export default tool