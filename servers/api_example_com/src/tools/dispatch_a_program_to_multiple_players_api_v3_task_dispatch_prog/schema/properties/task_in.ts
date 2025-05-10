import { z } from "zod"

export const inputParamsSchema = {
  "subject_start_time": z.string().datetime({ offset: true }).describe("Subject start time (edge local time)."),
  "subject_end_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Subject end time (edge local time). Only for urgent breaking program dispatching.").optional(),
  "start_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Task start time (edge local time). Null: Start immediately").optional(),
  "end_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Task end time (edge local time). Null: Never ends").optional()
}