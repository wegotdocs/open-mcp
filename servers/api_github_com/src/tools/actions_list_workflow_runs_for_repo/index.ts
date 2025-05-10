import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_workflow_runs_for_repo",
  "toolDescription": "List workflow runs for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "actor": "actor",
      "branch": "branch",
      "event": "event",
      "status": "status",
      "per_page": "per_page",
      "page": "page",
      "created": "created",
      "exclude_pull_requests": "exclude_pull_requests",
      "check_suite_id": "check_suite_id",
      "head_sha": "head_sha"
    }
  },
  inputParamsSchema
}

export default tool