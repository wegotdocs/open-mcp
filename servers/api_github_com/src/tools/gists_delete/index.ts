import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_delete",
  "toolDescription": "Delete a gist",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id"
    }
  },
  inputParamsSchema
}

export default tool