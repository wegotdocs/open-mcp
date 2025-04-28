import { z } from "zod"

export const inputParamsSchema = {
  "dev_id": z.number().int(),
  "display_name": z.string(),
  "skd_status_id": z.number().int().describe("Scheduler Status. 20: Activated, 40: Deactivated."),
  "skd_id": z.union([z.number().int(), z.null()]).optional(),
  "prog3_id": z.union([z.number().int(), z.null()]).optional(),
  "prog2_id": z.union([z.number().int(), z.null()]).optional(),
  "prog1_id": z.union([z.number().int(), z.null()]).optional(),
  "access-code": z.string()
}