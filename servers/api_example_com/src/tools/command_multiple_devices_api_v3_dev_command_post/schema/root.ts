import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "dev_id_list": z.array(z.number().int()),
  "command": z.string(),
  "log_date": z.union([z.string(), z.null()]).optional()
}