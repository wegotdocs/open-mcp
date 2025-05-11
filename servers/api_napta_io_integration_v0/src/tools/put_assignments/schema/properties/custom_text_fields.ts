import { z } from "zod"

export const inputParamsSchema = {
  "complementary_info": z.union([z.string().min(1), z.null()]).describe("Corresponding to custom field named 'Complementary info'").optional()
}