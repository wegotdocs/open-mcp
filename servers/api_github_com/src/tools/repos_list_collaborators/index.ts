import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_collaborators",
  "toolDescription": "List repository collaborators",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/collaborators",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "affiliation": "affiliation",
      "permission": "permission",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool