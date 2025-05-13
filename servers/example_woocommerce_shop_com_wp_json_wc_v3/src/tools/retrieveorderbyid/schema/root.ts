import { z } from "zod"

export const inputParamsSchema = {
  "orderId": z.number().int().describe("ID of order to return")
}