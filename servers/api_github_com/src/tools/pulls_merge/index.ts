import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_merge",
  "toolDescription": "Merge a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number"
    },
    "body": {
      "commit_title": "commit_title",
      "commit_message": "commit_message",
      "sha": "sha",
      "merge_method": "merge_method"
    }
  },
  inputParamsSchema
}

export default tool