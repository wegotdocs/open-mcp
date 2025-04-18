import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_delete_repo_subscription",
  "toolDescription": "Delete a repository subscription",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/subscription",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool