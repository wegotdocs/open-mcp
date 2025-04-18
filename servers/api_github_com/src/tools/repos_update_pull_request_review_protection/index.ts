import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_pull_request_review_protection",
  "toolDescription": "Update pull request review protection",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "branch": "branch"
    },
    "body": {
      "dismissal_restrictions": "dismissal_restrictions",
      "dismiss_stale_reviews": "dismiss_stale_reviews",
      "require_code_owner_reviews": "require_code_owner_reviews",
      "required_approving_review_count": "required_approving_review_count",
      "require_last_push_approval": "require_last_push_approval",
      "bypass_pull_request_allowances": "bypass_pull_request_allowances"
    }
  },
  inputParamsSchema
}

export default tool