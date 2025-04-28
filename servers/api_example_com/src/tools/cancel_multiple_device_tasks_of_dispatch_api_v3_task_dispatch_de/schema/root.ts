import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "devtask_id_list": z.array(z.number().int()),
  "note": z.union([z.string(), z.null()]).optional()
}