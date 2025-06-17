import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["fixed","percent"]).describe("Discount type").optional()
}