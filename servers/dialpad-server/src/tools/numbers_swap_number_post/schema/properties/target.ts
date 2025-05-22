import { z } from "zod"

export const inputParamsSchema = {
  "target_id": z.number().int().nullable().describe("The ID of the target to swap number."),
  "target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).nullable().describe("The type of the target.")
}