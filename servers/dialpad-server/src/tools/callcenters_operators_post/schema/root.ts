import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The call center's id."),
  "keep_paid_numbers": z.boolean().nullable().describe("Whether or not to keep phone numbers when switching to a support license.\n\nNote: Phone numbers require additional number licenses under a support license.").optional(),
  "license_type": z.enum(["agents","lite_support_agents"]).nullable().describe("The type of license to assign to the new operator if a license is required.\n(`agents` or `lite_support_agents`). Defaults to `agents`").optional(),
  "role": z.enum(["admin","operator","supervisor"]).nullable().describe("The role the user should assume.").optional(),
  "skill_level": z.number().int().nullable().describe("Skill level of the operator. Integer value in range 1 - 100. Default 100.").optional(),
  "user_id": z.number().int().nullable().describe("The ID of the user.")
}