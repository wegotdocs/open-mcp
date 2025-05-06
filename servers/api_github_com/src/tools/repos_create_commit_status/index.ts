import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_commit_status",
  "toolDescription": "Create a commit status",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/statuses/{sha}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "sha": "sha"
    },
    "body": {
      "state": "state",
      "target_url": "target_url",
      "description": "description",
      "context": "context"
    }
  },
  inputParamsSchema
}

export default tool