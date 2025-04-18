import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_re_run_job_for_workflow_run",
  "toolDescription": "Re-run a job from a workflow run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "job_id": "job_id"
    },
    "body": {
      "enable_debug_logging": "enable_debug_logging"
    }
  },
  inputParamsSchema
}

export default tool