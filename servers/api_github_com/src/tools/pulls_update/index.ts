import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_update",
  "toolDescription": "Update a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number"
    },
    "body": {
      "title": "title",
      "body": "body",
      "state": "state",
      "base": "base",
      "maintainer_can_modify": "maintainer_can_modify"
    }
  },
  inputParamsSchema
}

export default tool