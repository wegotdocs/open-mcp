import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_pull_requests_associated_with_commit",
  "toolDescription": "List pull requests associated with a commit",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/commits/{commit_sha}/pulls",
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