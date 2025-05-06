import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_workflow_run",
  "toolDescription": "Get a workflow run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs/{run_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "run_id": "run_id"
    },
    "query": {
      "exclude_pull_requests": "exclude_pull_requests"
    }
  },
  inputParamsSchema
}

export default tool