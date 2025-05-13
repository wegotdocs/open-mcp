import { z } from "zod"

export const inputParamsSchema = {
  "customerId": z.number().int().describe("ID of customer to delete"),
  "force": z.string().describe("Required to be true, as resource does not support trashing."),
  "reassign": z.number().int().describe("User ID to reassign posts to.").optional()
}