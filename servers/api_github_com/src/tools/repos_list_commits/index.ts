import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_commits",
  "toolDescription": "List commits",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/commits",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "sha": "sha",
      "path": "path",
      "author": "author",
      "committer": "committer",
      "since": "since",
      "until": "until",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool