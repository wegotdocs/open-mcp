import { z } from "zod"

export const inputParamsSchema = {
  "orderId": z.number().int().describe("ID of order to delete"),
  "force": z.boolean().describe("Required to be true, as resource does not support trashing.")
}