import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.union([z.literal(10), z.literal(20), z.literal(30), z.literal(40)]).describe("Number of items to return").optional()
}