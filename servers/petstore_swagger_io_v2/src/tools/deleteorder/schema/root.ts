import { z } from "zod"

export const inputParamsSchema = {
  "orderId": z.number().int().gte(1).describe("ID of the order that needs to be deleted")
}