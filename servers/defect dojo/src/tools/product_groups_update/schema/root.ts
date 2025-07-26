import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product_ group."),
  "product": z.number().int(),
  "group": z.number().int(),
  "role": z.number().int()
}