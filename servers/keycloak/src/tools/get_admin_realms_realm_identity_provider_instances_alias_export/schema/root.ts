import { z } from "zod"

export const inputParamsSchema = {
  "format": z.string().describe("Format to use").optional()
}