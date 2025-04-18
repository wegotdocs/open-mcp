import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_list_for_repo",
  "toolDescription": "List repository projects",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/projects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "state": "state",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool