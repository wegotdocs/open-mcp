import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().date().describe("Beginning of the time entry on which to delete time entries (day included)"),
  "end_date": z.string().date().describe("End of the time entry on which to delete time entries (day included)"),
  "user.napta_id": z.union([z.number().int(), z.null()]).describe("Napta identifier of the User. Either `user.napta_id` or `user.external_id` must be provided (but not both).").optional(),
  "user.external_id": z.union([z.string().min(1), z.null()]).describe("Unique reference of the User (see [External Ids](#tag/External-Ids)). Either `user.napta_id` or `user.external_id` must be provided (but not both).").optional(),
  "project.napta_id": z.union([z.number().int(), z.null()]).describe("Napta identifier of the Project. Either `project.napta_id` or `project.external_id` must be provided (but not both).").optional(),
  "project.external_id": z.union([z.string().min(1), z.null()]).describe("Unique reference of the Project (see [External Ids](#tag/External-Ids)). Either `project.napta_id` or `project.external_id` must be provided (but not both).").optional()
}