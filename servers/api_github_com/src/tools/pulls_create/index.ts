import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_create",
  "toolDescription": "Create a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "title": "title",
      "head": "head",
      "head_repo": "head_repo",
      "base": "base",
      "body": "body",
      "maintainer_can_modify": "maintainer_can_modify",
      "draft": "draft",
      "issue": "issue"
    }
  },
  inputParamsSchema
}

export default tool