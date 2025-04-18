import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_get_alert",
  "toolDescription": "Get a Dependabot alert",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "alert_number": "alert_number"
    }
  },
  inputParamsSchema
}

export default tool