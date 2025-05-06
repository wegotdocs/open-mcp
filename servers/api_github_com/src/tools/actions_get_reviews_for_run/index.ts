import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_reviews_for_run",
  "toolDescription": "Get the review history for a workflow run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs/{run_id}/approvals",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "run_id": "run_id"
    }
  },
  inputParamsSchema
}

export default tool