import { z } from "zod"

export const inputParamsSchema = {
  "productId": z.number().int().describe("ID of product to return")
}