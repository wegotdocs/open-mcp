import { z } from "zod"

export const inputParamsSchema = {
  "target_id": z.number().int().describe("The target's id.").optional(),
  "target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).describe("The target's type.").optional()
}