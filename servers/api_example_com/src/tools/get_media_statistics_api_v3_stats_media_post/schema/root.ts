import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "start_date": z.string().date(),
  "end_date": z.string().date(),
  "media_name": z.union([z.string(), z.null()]).optional(),
  "org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}