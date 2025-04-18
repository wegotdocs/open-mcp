import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_remove_assignees",
  "toolDescription": "Remove assignees from an issue",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/{issue_number}/assignees",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "issue_number": "issue_number"
    },
    "body": {
      "assignees": "assignees"
    }
  },
  inputParamsSchema
}

export default tool