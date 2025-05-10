import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "new_owner": z.string().describe("The username or organization name the repository will be transferred to."),
  "new_name": z.string().describe("The new name to be given to the repository.").optional(),
  "team_ids": z.array(z.number().int()).describe("ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.").optional()
}