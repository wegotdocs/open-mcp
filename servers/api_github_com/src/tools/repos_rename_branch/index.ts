import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_rename_branch",
  "toolDescription": "Rename a branch",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/branches/{branch}/rename",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "branch": "branch"
    },
    "body": {
      "new_name": "new_name"
    }
  },
  inputParamsSchema
}

export default tool