import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_autolink",
  "toolDescription": "Delete an autolink reference from a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/autolinks/{autolink_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "autolink_id": "autolink_id"
    }
  },
  inputParamsSchema
}

export default tool