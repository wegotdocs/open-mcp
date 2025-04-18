import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_create_commit",
  "toolDescription": "Create a commit",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/commits",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "message": "message",
      "tree": "tree",
      "parents": "parents",
      "author": "author",
      "committer": "committer",
      "signature": "signature"
    }
  },
  inputParamsSchema
}

export default tool