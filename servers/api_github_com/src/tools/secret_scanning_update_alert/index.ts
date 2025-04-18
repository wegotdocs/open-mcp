import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "secret_scanning_update_alert",
  "toolDescription": "Update a secret scanning alert",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
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
      "resolution": "resolution",
      "resolution_comment": "resolution_comment"
    }
  },
  inputParamsSchema
}

export default tool