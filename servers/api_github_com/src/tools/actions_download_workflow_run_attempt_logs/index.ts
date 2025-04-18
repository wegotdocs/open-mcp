import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_download_workflow_run_attempt_logs",
  "toolDescription": "Download workflow run attempt logs",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "run_id": "run_id",
      "attempt_number": "attempt_number"
    }
  },
  inputParamsSchema
}

export default tool