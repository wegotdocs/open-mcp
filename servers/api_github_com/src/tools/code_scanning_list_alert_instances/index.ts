import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_list_alert_instances",
  "toolDescription": "List instances of a code scanning alert",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
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
      "per_page": "per_page",
      "ref": "ref",
      "pr": "pr"
    }
  },
  inputParamsSchema
}

export default tool