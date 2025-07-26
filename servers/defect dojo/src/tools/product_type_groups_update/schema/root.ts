import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product_ type_ group."),
  "product_type": z.number().int(),
  "group": z.number().int(),
  "role": z.number().int()
}