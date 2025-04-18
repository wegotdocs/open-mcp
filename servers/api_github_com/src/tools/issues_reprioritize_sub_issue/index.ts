import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_reprioritize_sub_issue",
  "toolDescription": "Reprioritize sub-issue",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "issue_number": "issue_number"
    },
    "body": {
      "sub_issue_id": "sub_issue_id",
      "after_id": "after_id",
      "before_id": "before_id"
    }
  },
  inputParamsSchema
}

export default tool