import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_branch_protection",
  "toolDescription": "Update branch protection",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/branches/{branch}/protection",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "branch": "branch"
    },
    "body": {
      "required_status_checks": "required_status_checks",
      "enforce_admins": "enforce_admins",
      "required_pull_request_reviews": "required_pull_request_reviews",
      "restrictions": "restrictions",
      "required_linear_history": "required_linear_history",
      "allow_force_pushes": "allow_force_pushes",
      "allow_deletions": "allow_deletions",
      "block_creations": "block_creations",
      "required_conversation_resolution": "required_conversation_resolution",
      "lock_branch": "lock_branch",
      "allow_fork_syncing": "allow_fork_syncing"
    }
  },
  inputParamsSchema
}

export default tool