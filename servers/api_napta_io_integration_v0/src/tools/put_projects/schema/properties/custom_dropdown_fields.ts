import { z } from "zod"

export const inputParamsSchema = {
  "priority": z.union([z.string().min(1), z.null()]).describe("Corresponding to custom field named 'Priority'").optional(),
  "transportation": z.array(z.string().min(1)).describe("Corresponding to custom field named 'Transportation'").optional()
}