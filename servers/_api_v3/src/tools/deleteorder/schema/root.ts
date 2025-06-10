import { z } from "zod"

export const inputParamsSchema = {
  "orderId": z.number().int().describe("ID of the order that needs to be deleted")
}