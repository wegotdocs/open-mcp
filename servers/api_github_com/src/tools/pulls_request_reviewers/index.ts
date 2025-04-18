import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_request_reviewers",
  "toolDescription": "Request reviewers for a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
  "method": "post",
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