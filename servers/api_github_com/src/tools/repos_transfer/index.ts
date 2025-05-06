import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_transfer",
  "toolDescription": "Transfer a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/transfer",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "new_owner": "new_owner",
      "new_name": "new_name",
      "team_ids": "team_ids"
    }
  },
  inputParamsSchema
}

export default tool