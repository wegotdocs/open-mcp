import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_copilot_metrics_for_organization",
  "toolDescription": "Get Copilot metrics for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/copilot/metrics",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
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