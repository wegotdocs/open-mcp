import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int(),
  "session_id": z.string().optional()
}