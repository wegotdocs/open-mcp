import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_get",
  "toolDescription": "Get a check run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/check-runs/{check_run_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "check_run_id": "check_run_id"
    }
  },
  inputParamsSchema
}

export default tool