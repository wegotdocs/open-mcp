import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The access control policy's id."),
  "target_id": z.number().int().nullable().describe("Required if the policy is associated with a target (Office or Contact Center). Not required for a company level policy or if unassign_all is True.").optional(),
  "target_type": z.enum(["callcenter","company","office"]).nullable().describe("Policy permissions applied at this target level. Defaults to company target type.").optional(),
  "unassign_all": z.boolean().nullable().describe("Unassign all associated target groups from the user for a policy.").optional(),
  "user_id": z.number().int().nullable().describe("The user's id to be assigned to the policy.")
}