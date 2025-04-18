import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_commit_autofix",
  "toolDescription": "Commit an autofix for a code scanning alert",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "alert_number": "alert_number"
    },
    "body": {
      "target_ref": "target_ref",
      "message": "message"
    }
  },
  inputParamsSchema
}

export default tool