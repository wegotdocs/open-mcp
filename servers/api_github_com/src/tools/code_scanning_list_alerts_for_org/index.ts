import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_list_alerts_for_org",
  "toolDescription": "List code scanning alerts for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-scanning/alerts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "tool_name": "tool_name",
      "tool_guid": "tool_guid",
      "before": "before",
      "after": "after",
      "page": "page",
      "per_page": "per_page",
      "direction": "direction",
      "state": "state",
      "sort": "sort",
      "severity": "severity"
    }
  },
  inputParamsSchema
}

export default tool