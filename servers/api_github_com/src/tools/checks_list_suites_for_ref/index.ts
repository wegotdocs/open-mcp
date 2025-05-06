import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_list_suites_for_ref",
  "toolDescription": "List check suites for a Git reference",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/commits/{ref}/check-suites",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ref": "ref"
    },
    "query": {
      "app_id": "app_id",
      "check_name": "check_name",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool