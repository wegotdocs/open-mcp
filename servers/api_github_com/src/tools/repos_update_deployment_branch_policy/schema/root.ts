import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`."),
  "branch_policy_id": z.number().int().describe("The unique identifier of the branch policy."),
  "name": z.string().describe("The name pattern that branches must match in order to deploy to the environment.\n\nWildcard characters will not match `/`. For example, to match branches that begin with `release/` and contain an additional single slash, use `release/*/*`.\nFor more information about pattern matching syntax, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).")
}