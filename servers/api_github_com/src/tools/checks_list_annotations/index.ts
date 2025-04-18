import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_list_annotations",
  "toolDescription": "List check run annotations",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "check_run_id": "check_run_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool