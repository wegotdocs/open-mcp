import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_list_for_suite",
  "toolDescription": "List check runs in a check suite",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "check_suite_id": "check_suite_id"
    },
    "query": {
      "check_name": "check_name",
      "status": "status",
      "filter": "filter",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool