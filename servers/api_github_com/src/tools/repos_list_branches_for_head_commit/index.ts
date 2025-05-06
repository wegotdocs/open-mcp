import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_branches_for_head_commit",
  "toolDescription": "List branches for HEAD commit",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "commit_sha": "commit_sha"
    }
  },
  inputParamsSchema
}

export default tool