import { z } from "zod"

export const inputParamsSchema = {
  "lang": z.string().describe("Language").optional()
}