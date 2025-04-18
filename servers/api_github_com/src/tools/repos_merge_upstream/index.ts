import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_merge_upstream",
  "toolDescription": "Sync a fork branch with the upstream repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/merge-upstream",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "branch": "branch"
    }
  },
  inputParamsSchema
}

export default tool