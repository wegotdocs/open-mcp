import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_delete_workflow_run_logs",
  "toolDescription": "Delete workflow run logs",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runs/{run_id}/logs",
  "method": "delete",
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