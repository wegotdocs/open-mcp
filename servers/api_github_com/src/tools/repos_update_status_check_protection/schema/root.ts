import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "strict": z.boolean().describe("Require branches to be up to date before merging.").optional(),
  "checks": z.array(z.object({ "context": z.string().describe("The name of the required check"), "app_id": z.number().int().describe("The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.").optional() })).describe("The list of status checks to require in order to merge into this branch.").optional()
}