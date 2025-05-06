import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_copilot_metrics_for_team",
  "toolDescription": "Get Copilot metrics for a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/team/{team_slug}/copilot/metrics",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug"
    },
    "query": {
      "since": "since",
      "until": "until",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool