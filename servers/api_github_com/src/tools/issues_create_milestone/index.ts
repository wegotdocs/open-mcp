import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_create_milestone",
  "toolDescription": "Create a milestone",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/milestones",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
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