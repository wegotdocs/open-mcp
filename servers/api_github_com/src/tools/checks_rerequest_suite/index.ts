import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_rerequest_suite",
  "toolDescription": "Rerequest a check suite",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
  "method": "post",
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