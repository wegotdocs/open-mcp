import { z } from "zod"

export const inputParams = {
  "primary": z.string().nullable().describe("This Contact's primary phone number.").optional(),
  "secondary": z.string().nullable().describe("This Contact's secondary phone number.").optional()
}