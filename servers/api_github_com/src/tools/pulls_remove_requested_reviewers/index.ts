import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_remove_requested_reviewers",
  "toolDescription": "Remove requested reviewers from a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number"
    },
    "body": {
      "reviewers": "reviewers",
      "team_reviewers": "team_reviewers"
    }
  },
  inputParamsSchema
}

export default tool