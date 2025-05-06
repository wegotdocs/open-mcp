import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_webhook",
  "toolDescription": "Update a repository webhook",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/hooks/{hook_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "hook_id": "hook_id"
    },
    "body": {
      "config": "config",
      "events": "events",
      "add_events": "add_events",
      "remove_events": "remove_events",
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool