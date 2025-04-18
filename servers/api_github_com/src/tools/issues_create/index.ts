import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_create",
  "toolDescription": "Create an issue",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "title": "title",
      "body": "body",
      "assignee": "assignee",
      "milestone": "milestone",
      "labels": "labels",
      "assignees": "assignees",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool