import { z } from "zod"

export const inputParams = {
  "max_length": z.number().int().describe("maximum length of returned fact").optional()
}