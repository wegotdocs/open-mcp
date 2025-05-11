import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().date().describe("Start date of the Leave"),
  "end_date": z.string().date().describe("End date of the Leave"),
  "starts_at_midday": z.boolean().describe("Whether the Leave starts at midday").optional(),
  "ends_at_midday": z.boolean().describe("Whether the Leave ends at midday").optional(),
  "user.napta_id": z.union([z.number().int(), z.null()]).describe("Napta identifier of the User. Either `user.napta_id` or `user.external_id` must be provided (but not both).").optional(),
  "user.external_id": z.union([z.string().min(1), z.null()]).describe("Unique reference of the User (see [External Ids](#tag/External-Ids)). Either `user.napta_id` or `user.external_id` must be provided (but not both).").optional()
}