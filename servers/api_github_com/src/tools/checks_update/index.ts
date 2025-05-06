import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_update",
  "toolDescription": "Update a check run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/check-runs/{check_run_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "check_run_id": "check_run_id"
    },
    "body": {
      "name": "name",
      "details_url": "details_url",
      "external_id": "external_id",
      "started_at": "started_at",
      "status": "status",
      "conclusion": "conclusion",
      "completed_at": "completed_at",
      "output": "output",
      "actions": "actions"
    }
  },
  inputParamsSchema
}

export default tool