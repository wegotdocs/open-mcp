import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the repository."),
  "description": z.string().describe("A short description of the repository.").optional(),
  "homepage": z.string().describe("A URL with more information about the repository.").optional(),
  "private": z.boolean().describe("Whether the repository is private.").optional(),
  "has_issues": z.boolean().describe("Whether issues are enabled.").optional(),
  "has_projects": z.boolean().describe("Whether projects are enabled.").optional(),
  "has_wiki": z.boolean().describe("Whether the wiki is enabled.").optional(),
  "has_discussions": z.boolean().describe("Whether discussions are enabled.").optional(),
  "team_id": z.number().int().describe("The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.").optional(),
  "auto_init": z.boolean().describe("Whether the repository is initialized with a minimal README.").optional(),
  "gitignore_template": z.string().describe("The desired language or platform to apply to the .gitignore.").optional(),
  "license_template": z.string().describe("The license keyword of the open source license for this repository.").optional(),
  "allow_squash_merge": z.boolean().describe("Whether to allow squash merges for pull requests.").optional(),
  "allow_merge_commit": z.boolean().describe("Whether to allow merge commits for pull requests.").optional(),
  "allow_rebase_merge": z.boolean().describe("Whether to allow rebase merges for pull requests.").optional(),
  "allow_auto_merge": z.boolean().describe("Whether to allow Auto-merge to be used on pull requests.").optional(),
  "delete_branch_on_merge": z.boolean().describe("Whether to delete head branches when pull requests are merged").optional(),
  "squash_merge_commit_title": z.enum(["PR_TITLE","COMMIT_OR_PR_TITLE"]).describe("Required when using `squash_merge_commit_message`.\n\nThe default value for a squash merge commit title:\n\n- `PR_TITLE` - default to the pull request's title.\n- `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).").optional(),
  "squash_merge_commit_message": z.enum(["PR_BODY","COMMIT_MESSAGES","BLANK"]).describe("The default value for a squash merge commit message:\n\n- `PR_BODY` - default to the pull request's body.\n- `COMMIT_MESSAGES` - default to the branch's commit messages.\n- `BLANK` - default to a blank commit message.").optional(),
  "merge_commit_title": z.enum(["PR_TITLE","MERGE_MESSAGE"]).describe("Required when using `merge_commit_message`.\n\nThe default value for a merge commit title.\n\n- `PR_TITLE` - default to the pull request's title.\n- `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).").optional(),
  "merge_commit_message": z.enum(["PR_BODY","PR_TITLE","BLANK"]).describe("The default value for a merge commit message.\n\n- `PR_TITLE` - default to the pull request's title.\n- `PR_BODY` - default to the pull request's body.\n- `BLANK` - default to a blank commit message.").optional(),
  "has_downloads": z.boolean().describe("Whether downloads are enabled.").optional(),
  "is_template": z.boolean().describe("Whether this repository acts as a template that can be used to generate new repositories.").optional()
}