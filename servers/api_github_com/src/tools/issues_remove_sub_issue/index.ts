import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_remove_sub_issue",
  "toolDescription": "Remove sub-issue",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/{issue_number}/sub_issue",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "issue_number": "issue_number"
    },
    "body": {
      "sub_issue_id": "sub_issue_id"
    }
  },
  inputParamsSchema
}

export default tool