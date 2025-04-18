import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_webhook",
  "toolDescription": "Create a repository webhook",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/hooks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "name": "name",
      "config": "config",
      "events": "events",
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool