import { z } from "zod"

export const inputParamsSchema = {
  "prog_id": z.number().int(),
  "session_id": z.string().optional(),
  "thumbnail": z.string().describe("Base64/JPG.")
}