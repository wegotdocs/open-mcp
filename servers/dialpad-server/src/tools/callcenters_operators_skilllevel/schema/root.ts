import { z } from "zod"

export const inputParamsSchema = {
  "call_center_id": z.number().int().describe("The call center's ID"),
  "user_id": z.number().int().describe("The operator's ID"),
  "skill_level": z.number().int().nullable().describe("New skill level to set the operator in the call center. It must be an integer value between 0 and 100.")
}