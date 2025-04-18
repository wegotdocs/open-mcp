import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_for_authenticated_user",
  "toolDescription": "Create a repository for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/repos",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "description": "description",
      "homepage": "homepage",
      "private": "private",
      "has_issues": "has_issues",
      "has_projects": "has_projects",
      "has_wiki": "has_wiki",
      "has_discussions": "has_discussions",
      "team_id": "team_id",
      "auto_init": "auto_init",
      "gitignore_template": "gitignore_template",
      "license_template": "license_template",
      "allow_squash_merge": "allow_squash_merge",
      "allow_merge_commit": "allow_merge_commit",
      "allow_rebase_merge": "allow_rebase_merge",
      "allow_auto_merge": "allow_auto_merge",
      "delete_branch_on_merge": "delete_branch_on_merge",
      "squash_merge_commit_title": "squash_merge_commit_title",
      "squash_merge_commit_message": "squash_merge_commit_message",
      "merge_commit_title": "merge_commit_title",
      "merge_commit_message": "merge_commit_message",
      "has_downloads": "has_downloads",
      "is_template": "is_template"
    }
  },
  inputParamsSchema
}

export default tool