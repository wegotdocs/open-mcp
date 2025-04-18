import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_update_alert",
  "toolDescription": "Update a code scanning alert",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "alert_number": "alert_number"
    },
    "body": {
      "state": "state",
      "dismissed_reason": "dismissed_reason",
      "dismissed_comment": "dismissed_comment",
      "create_request": "create_request"
    }
  },
  inputParamsSchema
}

export default tool