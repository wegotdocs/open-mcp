import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_update_comment",
  "toolDescription": "Update a gist comment",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}/comments/{comment_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id",
      "comment_id": "comment_id"
    },
    "body": {
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool