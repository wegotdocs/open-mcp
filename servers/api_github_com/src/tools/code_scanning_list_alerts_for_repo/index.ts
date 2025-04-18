import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_list_alerts_for_repo",
  "toolDescription": "List code scanning alerts for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/alerts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "tool_name": "tool_name",
      "tool_guid": "tool_guid",
      "page": "page",
      "per_page": "per_page",
      "ref": "ref",
      "pr": "pr",
      "direction": "direction",
      "before": "before",
      "after": "after",
      "sort": "sort",
      "state": "state",
      "severity": "severity"
    }
  },
  inputParamsSchema
}

export default tool