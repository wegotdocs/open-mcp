import { z } from "zod"

export const inputParamsSchema = {
  "number": z.string().describe("A phone number (e164 format)."),
  "release": z.boolean().describe("Releases the number (does not return it to the company reserved pool).").optional()
}