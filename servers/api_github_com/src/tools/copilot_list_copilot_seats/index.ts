import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_list_copilot_seats",
  "toolDescription": "List all Copilot seat assignments for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/copilot/billing/seats",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool