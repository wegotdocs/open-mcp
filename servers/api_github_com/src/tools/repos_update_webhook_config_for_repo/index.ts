import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_webhook_config_for_repo",
  "toolDescription": "Update a webhook configuration for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/hooks/{hook_id}/config",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "hook_id": "hook_id"
    },
    "body": {
      "url": "url",
      "content_type": "content_type",
      "secret": "secret",
      "insecure_ssl": "insecure_ssl"
    }
  },
  inputParamsSchema
}

export default tool