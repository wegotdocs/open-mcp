import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release."),
  "tag_name": z.string().describe("The name of the tag.").optional(),
  "target_commitish": z.string().describe("Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch.").optional(),
  "name": z.string().describe("The name of the release.").optional(),
  "body": z.string().describe("Text describing the contents of the tag.").optional(),
  "draft": z.boolean().describe("`true` makes the release a draft, and `false` publishes the release.").optional(),
  "prerelease": z.boolean().describe("`true` to identify the release as a prerelease, `false` to identify the release as a full release.").optional(),
  "make_latest": z.enum(["true","false","legacy"]).describe("Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.").optional(),
  "discussion_category_name": z.string().describe("If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. If there is already a discussion linked to the release, this parameter is ignored. For more information, see \"[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository).\"").optional()
}