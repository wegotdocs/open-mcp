import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_list_for_release",
  "toolDescription": "List reactions for a release",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/{release_id}/reactions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "release_id": "release_id"
    },
    "query": {
      "content": "content",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool