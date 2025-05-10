import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_list_for_ref",
  "toolDescription": "List check runs for a Git reference",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/commits/{ref}/check-runs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ref": "ref"
    },
    "query": {
      "check_name": "check_name",
      "status": "status",
      "filter": "filter",
      "per_page": "per_page",
      "page": "page",
      "app_id": "app_id"
    }
  },
  inputParamsSchema
}

export default tool