import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_autolink",
  "toolDescription": "Get an autolink reference of a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/autolinks/{autolink_id}",
  "method": "get",
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