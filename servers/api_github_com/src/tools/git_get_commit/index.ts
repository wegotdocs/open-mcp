import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_get_commit",
  "toolDescription": "Get a commit object",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/commits/{commit_sha}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "commit_sha": "commit_sha"
    }
  },
  inputParamsSchema
}

export default tool