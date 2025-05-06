import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_workflow_run_attempt",
  "toolDescription": "Get a workflow run attempt",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "run_id": "run_id",
      "attempt_number": "attempt_number"
    },
    "query": {
      "exclude_pull_requests": "exclude_pull_requests"
    }
  },
  inputParamsSchema
}

export default tool