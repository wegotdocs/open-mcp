import { z } from "zod"

export const inputParamsSchema = {
  "contract": z.union([z.string().min(1), z.null()]).describe("Corresponding to custom field named 'Contract'").optional(),
  "accreditation": z.array(z.string().min(1)).describe("Corresponding to custom field named 'Accreditation'").optional()
}