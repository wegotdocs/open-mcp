import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_check_is_starred",
  "toolDescription": "Check if a gist is starred",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}/star",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id"
    }
  },
  inputParamsSchema
}

export default tool