import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "t": z.string().describe("StoreVue token").optional(),
  "username": z.string().optional(),
  "password": z.string().optional(),
  "prefer_lang": z.string().optional(),
  "time_offset": z.number().int().optional()
}