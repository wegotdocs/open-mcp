import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_create",
  "toolDescription": "Create a check run",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/check-runs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "name": "name",
      "head_sha": "head_sha",
      "details_url": "details_url",
      "external_id": "external_id",
      "status": "status",
      "started_at": "started_at",
      "conclusion": "conclusion",
      "completed_at": "completed_at",
      "output": "output",
      "actions": "actions"
    }
  },
  inputParamsSchema
}

export default tool