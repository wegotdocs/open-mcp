import { z } from "zod"

export const inputParamsSchema = {
  "assignment_probability": z.union([z.string().min(1), z.null()]).describe("Corresponding to custom field named 'Assignment probability'").optional(),
  "role": z.array(z.string().min(1)).describe("Corresponding to custom field named 'Role'").optional()
}