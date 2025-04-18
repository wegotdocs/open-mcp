import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_list_repository_advisories",
  "toolDescription": "List repository security advisories",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/security-advisories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "direction": "direction",
      "sort": "sort",
      "before": "before",
      "after": "after",
      "per_page": "per_page",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool