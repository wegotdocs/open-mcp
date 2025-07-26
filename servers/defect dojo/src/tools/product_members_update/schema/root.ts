import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product_ member."),
  "product": z.number().int(),
  "user": z.number().int(),
  "role": z.number().int()
}