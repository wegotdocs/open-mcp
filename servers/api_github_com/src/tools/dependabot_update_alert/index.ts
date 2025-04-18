import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_update_alert",
  "toolDescription": "Update a Dependabot alert",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
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
      "dismissed_comment": "dismissed_comment"
    }
  },
  inputParamsSchema
}

export default tool