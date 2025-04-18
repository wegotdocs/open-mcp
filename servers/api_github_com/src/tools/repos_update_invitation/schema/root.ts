import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "invitation_id": z.number().int().describe("The unique identifier of the invitation."),
  "permissions": z.enum(["read","write","maintain","triage","admin"]).describe("The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.").optional()
}