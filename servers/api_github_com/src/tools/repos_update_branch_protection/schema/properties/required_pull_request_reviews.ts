import { z } from "zod"

export const inputParamsSchema = {
  "dismissal_restrictions": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `dismissal_restrictions` to the tool, first call the tool `expandSchema` with \"/properties/required_pull_request_reviews/properties/dismissal_restrictions\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.</property-description>").optional(),
  "dismiss_stale_reviews": z.boolean().describe("Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.").optional(),
  "require_code_owner_reviews": z.boolean().describe("Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) review them.").optional(),
  "required_approving_review_count": z.number().int().describe("Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.").optional(),
  "require_last_push_approval": z.boolean().describe("Whether the most recent push must be approved by someone other than the person who pushed it. Default: `false`.").optional(),
  "bypass_pull_request_allowances": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bypass_pull_request_allowances` to the tool, first call the tool `expandSchema` with \"/properties/required_pull_request_reviews/properties/bypass_pull_request_allowances\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Allow specific users, teams, or apps to bypass pull request requirements.</property-description>").optional()
}