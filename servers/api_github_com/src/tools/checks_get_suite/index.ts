import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_get_suite",
  "toolDescription": "Get a check suite",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/check-suites/{check_suite_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "check_suite_id": "check_suite_id"
    }
  },
  inputParamsSchema
}

export default tool