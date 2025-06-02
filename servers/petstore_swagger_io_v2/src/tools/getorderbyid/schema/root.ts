import { z } from "zod"

export const inputParamsSchema = {
  "orderId": z.number().int().gte(1).lte(10).describe("ID of pet that needs to be fetched")
}