import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_comments_for_commit",
  "toolDescription": "List commit comments",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "commit_sha": "commit_sha"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool