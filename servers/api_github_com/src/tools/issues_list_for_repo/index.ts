import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_list_for_repo",
  "toolDescription": "List repository issues",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "milestone": "milestone",
      "state": "state",
      "assignee": "assignee",
      "type": "type",
      "creator": "creator",
      "mentioned": "mentioned",
      "labels": "labels",
      "sort": "sort",
      "direction": "direction",
      "since": "since",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool