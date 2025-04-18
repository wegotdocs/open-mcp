import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_merge",
  "toolDescription": "Merge a branch",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/merges",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "base": "base",
      "head": "head",
      "commit_message": "commit_message"
    }
  },
  inputParamsSchema
}

export default tool