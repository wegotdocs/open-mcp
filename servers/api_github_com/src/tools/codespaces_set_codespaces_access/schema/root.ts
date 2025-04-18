import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "visibility": z.enum(["disabled","selected_members","all_members","all_members_and_outside_collaborators"]).describe("Which users can access codespaces in the organization. `disabled` means that no users can access codespaces in the organization."),
  "selected_usernames": z.array(z.string()).max(100).describe("The usernames of the organization members who should have access to codespaces in the organization. Required when `visibility` is `selected_members`. The provided list of usernames will replace any existing value.").optional()
}