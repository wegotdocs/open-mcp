import { z } from "zod"

export const inputParamsSchema = {
  "evt_id": z.number().int(),
  "session_id": z.string().optional()
}