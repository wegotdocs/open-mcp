import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "organization": z.string().describe("Optional parameter to specify the organization name if forking into an organization.").optional(),
  "name": z.string().describe("When forking from an existing repository, a new name for the fork.").optional(),
  "default_branch_only": z.boolean().describe("When forking from an existing repository, fork with only the default branch.").optional()
}