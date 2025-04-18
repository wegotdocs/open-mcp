import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_file",
  "toolDescription": "Delete a file",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/contents/{path}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "path": "path"
    },
    "body": {
      "message": "message",
      "sha": "sha",
      "branch": "branch",
      "committer": "committer",
      "author": "author"
    }
  },
  inputParamsSchema
}

export default tool