import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the repository."),
  "description": z.string().describe("A short description of the repository.").optional(),
  "homepage": z.string().describe("A URL with more information about the repository.").optional(),
  "private": z.boolean().describe("Whether the repository is private.").optional(),
  "visibility": z.enum(["public","private"]).describe("The visibility of the repository.").optional(),
  "has_issues": z.boolean().describe("Either `true` to enable issues for this repository or `false` to disable them.").optional(),
  "has_projects": z.boolean().describe("Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.").optional(),
  "has_wiki": z.boolean().describe("Either `true` to enable the wiki for this repository or `false` to disable it.").optional(),
  "has_downloads": z.boolean().describe("Whether downloads are enabled.").optional(),
  "is_template": z.boolean().describe("Either `true` to make this repo available as a template repository or `false` to prevent it.").optional(),
  "team_id": z.number().int().describe("The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.").optional(),
  "auto_init": z.boolean().describe("Pass `true` to create an initial commit with empty README.").optional(),
  "gitignore_template": z.string().describe("Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, \"Haskell\".").optional(),
  "license_template": z.string().describe("Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, \"mit\" or \"mpl-2.0\".").optional(),
  "allow_squash_merge": z.boolean().describe("Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.").optional(),
  "allow_merge_commit": z.boolean().describe("Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.").optional(),
  "allow_rebase_merge": z.boolean().describe("Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.").optional(),
  "allow_auto_merge": z.boolean().describe("Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.").optional(),
  "delete_branch_on_merge": z.boolean().describe("Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. **The authenticated user must be an organization owner to set this property to `true`.**").optional(),
  "squash_merge_commit_title": z.enum(["PR_TITLE","COMMIT_OR_PR_TITLE"]).describe("Required when using `squash_merge_commit_message`.\n\nThe default value for a squash merge commit title:\n\n- `PR_TITLE` - default to the pull request's title.\n- `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).").optional(),
  "squash_merge_commit_message": z.enum(["PR_BODY","COMMIT_MESSAGES","BLANK"]).describe("The default value for a squash merge commit message:\n\n- `PR_BODY` - default to the pull request's body.\n- `COMMIT_MESSAGES` - default to the branch's commit messages.\n- `BLANK` - default to a blank commit message.").optional(),
  "merge_commit_title": z.enum(["PR_TITLE","MERGE_MESSAGE"]).describe("Required when using `merge_commit_message`.\n\nThe default value for a merge commit title.\n\n- `PR_TITLE` - default to the pull request's title.\n- `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).").optional(),
  "merge_commit_message": z.enum(["PR_BODY","PR_TITLE","BLANK"]).describe("The default value for a merge commit message.\n\n- `PR_TITLE` - default to the pull request's title.\n- `PR_BODY` - default to the pull request's body.\n- `BLANK` - default to a blank commit message.").optional(),
  "custom_properties": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_properties` to the tool, first call the tool `expandSchema` with \"/properties/custom_properties\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The custom properties for the new repository. The keys are the custom property names, and the values are the corresponding custom property values.</property-description>").optional()
}