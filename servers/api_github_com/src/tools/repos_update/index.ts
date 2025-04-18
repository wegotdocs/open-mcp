import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update",
  "toolDescription": "Update a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "name": "name",
      "description": "description",
      "homepage": "homepage",
      "private": "private",
      "visibility": "visibility",
      "security_and_analysis": "security_and_analysis",
      "has_issues": "has_issues",
      "has_projects": "has_projects",
      "has_wiki": "has_wiki",
      "is_template": "is_template",
      "default_branch": "default_branch",
      "allow_squash_merge": "allow_squash_merge",
      "allow_merge_commit": "allow_merge_commit",
      "allow_rebase_merge": "allow_rebase_merge",
      "allow_auto_merge": "allow_auto_merge",
      "delete_branch_on_merge": "delete_branch_on_merge",
      "allow_update_branch": "allow_update_branch",
      "squash_merge_commit_title": "squash_merge_commit_title",
      "squash_merge_commit_message": "squash_merge_commit_message",
      "merge_commit_title": "merge_commit_title",
      "merge_commit_message": "merge_commit_message",
      "archived": "archived",
      "allow_forking": "allow_forking",
      "web_commit_signoff_required": "web_commit_signoff_required"
    }
  },
  inputParamsSchema
}

export default tool