import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_commit_comment",
  "toolDescription": "Create a commit comment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "commit_sha": "commit_sha"
    },
    "body": {
      "body": "body",
      "path": "path",
      "position": "position",
      "line": "line"
    }
  },
  inputParamsSchema
}

export default tool