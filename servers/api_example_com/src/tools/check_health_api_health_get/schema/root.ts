import { z } from "zod"

export const inputParamsSchema = {
  "include_details": z.boolean().describe("Include detailed endpoint status").optional()
}