import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "secret_scanning_list_locations_for_alert",
  "toolDescription": "List locations for a secret scanning alert",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "alert_number": "alert_number"
    },
    "query": {
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool