import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_job_for_workflow_run",
  "toolDescription": "Get a job for a workflow run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/jobs/{job_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "job_id": "job_id"
    }
  },
  inputParamsSchema
}

export default tool