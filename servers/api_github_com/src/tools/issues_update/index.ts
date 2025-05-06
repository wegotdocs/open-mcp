import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_update",
  "toolDescription": "Update an issue",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/{issue_number}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "issue_number": "issue_number"
    },
    "body": {
      "title": "title",
      "body": "body",
      "assignee": "assignee",
      "state": "state",
      "state_reason": "state_reason",
      "milestone": "milestone",
      "labels": "labels",
      "assignees": "assignees",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool