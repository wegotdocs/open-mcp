import { z } from "zod"

export const inputParamsSchema = {
  "fecha": z.string().describe("Día (AAAA-MM-DD)")
}