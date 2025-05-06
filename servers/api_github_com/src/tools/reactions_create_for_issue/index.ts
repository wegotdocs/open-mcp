import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_create_for_issue",
  "toolDescription": "Create reaction for an issue",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/{issue_number}/reactions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "issue_number": "issue_number"
    },
    "body": {
      "content": "content"
    }
  },
  inputParamsSchema
}

export default tool