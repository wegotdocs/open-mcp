import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_update_milestone",
  "toolDescription": "Update a milestone",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/milestones/{milestone_number}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "milestone_number": "milestone_number"
    },
    "body": {
      "title": "title",
      "state": "state",
      "description": "description",
      "due_on": "due_on"
    }
  },
  inputParamsSchema
}

export default tool