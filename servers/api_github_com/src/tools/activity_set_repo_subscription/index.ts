import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_set_repo_subscription",
  "toolDescription": "Set a repository subscription",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/subscription",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "subscribed": "subscribed",
      "ignored": "ignored"
    }
  },
  inputParamsSchema
}

export default tool