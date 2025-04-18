import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_or_update_file_contents",
  "toolDescription": "Create or update file contents",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/contents/{path}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "path": "path"
    },
    "body": {
      "message": "message",
      "content": "content",
      "sha": "sha",
      "branch": "branch",
      "committer": "committer",
      "author": "author"
    }
  },
  inputParamsSchema
}

export default tool