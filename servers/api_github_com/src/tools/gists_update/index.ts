import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_update",
  "toolDescription": "Update a gist",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id"
    },
    "body": {
      "description": "description",
      "files": "files"
    }
  },
  inputParamsSchema
}

export default tool