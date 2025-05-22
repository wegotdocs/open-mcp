import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("A token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "started_after": z.number().int().describe("Only includes calls that started more recently than the specified timestamp.\n(UTC ms-since-epoch timestamp)").optional(),
  "started_before": z.number().int().describe("Only includes calls that started prior to the specified timestamp.\n(UTC ms-since-epoch timestamp)").optional(),
  "target_id": z.number().int().describe("The ID of a target to filter against.").optional(),
  "target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).describe("The target type associated with the target ID.").optional()
}