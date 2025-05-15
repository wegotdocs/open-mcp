import { z } from "zod"

export const inputParamsSchema = {
  "orderId": z.number().int().describe("ID of order that needs to be fetched")
}