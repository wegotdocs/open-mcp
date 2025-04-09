import { z } from "zod"

export const inputParams = {
  "format": z.string().describe("Format to use").optional()
}