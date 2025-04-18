import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_star",
  "toolDescription": "Star a gist",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}/star",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id"
    }
  },
  inputParamsSchema
}

export default tool