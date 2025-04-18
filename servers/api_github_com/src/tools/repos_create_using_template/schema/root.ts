import { z } from "zod"

export const inputParamsSchema = {
  "template_owner": z.string().describe("The account owner of the template repository. The name is not case sensitive."),
  "template_repo": z.string().describe("The name of the template repository without the `.git` extension. The name is not case sensitive."),
  "owner": z.string().describe("The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.").optional(),
  "name": z.string().describe("The name of the new repository."),
  "description": z.string().describe("A short description of the new repository.").optional(),
  "include_all_branches": z.boolean().describe("Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: `false`.").optional(),
  "private": z.boolean().describe("Either `true` to create a new private repository or `false` to create a new public one.").optional()
}