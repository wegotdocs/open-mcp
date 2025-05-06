import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_list_labels_for_milestone",
  "toolDescription": "List labels for issues in a milestone",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/milestones/{milestone_number}/labels",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "milestone_number": "milestone_number"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool