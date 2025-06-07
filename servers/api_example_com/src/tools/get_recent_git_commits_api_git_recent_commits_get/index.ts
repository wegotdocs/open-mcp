import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_recent_git_commits_api_git_recent_commits_get",
  "toolDescription": "Get Recent Git Commits",
  "baseUrl": "https://api.example.com",
  "path": "/api/git/recent-commits",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "count": "count"
    }
  },
  inputParamsSchema
}

export default tool