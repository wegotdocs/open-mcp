import { z } from "zod"

export const inputParamsSchema = {
  "numbers": z.array(z.string()).nullable().describe("A list of E164 formatted numbers.").optional()
}