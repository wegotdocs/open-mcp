import { z } from "zod"

export const inputParamsSchema = {
  "phone_number": z.union([z.string().min(1), z.null()]).describe("Corresponding to custom field named 'Phone number'").optional()
}