import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_jobs_for_workflow_run",
  "toolDescription": "List jobs for a workflow run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "run_id": "run_id"
    },
    "query": {
      "filter": "filter",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool