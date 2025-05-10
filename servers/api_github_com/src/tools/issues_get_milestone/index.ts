import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_get_milestone",
  "toolDescription": "Get a milestone",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/milestones/{milestone_number}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "milestone_number": "milestone_number"
    }
  },
  inputParamsSchema
}

export default tool