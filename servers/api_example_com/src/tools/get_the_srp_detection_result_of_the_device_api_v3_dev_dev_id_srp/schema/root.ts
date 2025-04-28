import { z } from "zod"

export const inputParamsSchema = {
  "dev_id": z.number().int(),
  "srp_name": z.string(),
  "session_id": z.string().optional()
}