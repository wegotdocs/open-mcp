import { z } from "zod"

export const inputParamsSchema = {
  "productId": z.number().int().describe("ID of product to delete"),
  "force": z.boolean().describe("Required to be true, as resource does not support trashing.")
}