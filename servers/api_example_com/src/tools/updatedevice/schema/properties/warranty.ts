import { z } from "zod"

export const inputParamsSchema = {
  "startDate": z.number().describe("Warranty Start Date (Seconds)").optional(),
  "endDate": z.number().describe("Warranty End Date (Seconds)").optional(),
  "manufacturerFulfillmentDate": z.number().describe("Manufacturer Fulfillment Date").optional()
}