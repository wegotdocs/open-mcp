import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_list_requested_reviewers",
  "toolDescription": "Get all requested reviewers for a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number"
    }
  },
  inputParamsSchema
}

export default tool