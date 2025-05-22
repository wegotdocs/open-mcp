import { z } from "zod"

export const inputParamsSchema = {
  "number": z.string().describe("A specific number to assign"),
  "primary": z.boolean().nullable().describe("A boolean indicating whether this should become the target's primary phone number.").optional(),
  "target_id": z.number().int().nullable().describe("The ID of the target to reassign this number to."),
  "target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).nullable().describe("The type of the target.")
}