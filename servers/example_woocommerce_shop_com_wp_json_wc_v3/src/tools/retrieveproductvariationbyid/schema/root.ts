import { z } from "zod"

export const inputParamsSchema = {
  "productId": z.number().int().describe("ID of parent product for variation to return"),
  "variationId": z.number().int().describe("ID of variation to return")
}