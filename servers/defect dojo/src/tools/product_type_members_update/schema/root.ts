import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product_ type_ member."),
  "product_type": z.number().int(),
  "user": z.number().int(),
  "role": z.number().int()
}