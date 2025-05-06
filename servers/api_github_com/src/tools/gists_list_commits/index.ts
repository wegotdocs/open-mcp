import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_list_commits",
  "toolDescription": "List gist commits",
  "baseUrl": "https://api.github.com",
  "path": "/gists/{gist_id}/commits",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "gist_id": "gist_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool