import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_unlock",
  "toolDescription": "Unlock an issue",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/{issue_number}/lock",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "issue_number": "issue_number"
    }
  },
  inputParamsSchema
}

export default tool