import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_create_comment",
  "toolDescription": "Create a gist comment",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}/comments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id"
    },
    "body": {
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool