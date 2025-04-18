import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_re_run_workflow_failed_jobs",
  "toolDescription": "Re-run failed jobs from a workflow run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "run_id": "run_id"
    },
    "body": {
      "enable_debug_logging": "enable_debug_logging"
    }
  },
  inputParamsSchema
}

export default tool