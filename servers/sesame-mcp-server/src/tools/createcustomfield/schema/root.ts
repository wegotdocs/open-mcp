import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string().uuid().describe("The id of the company"),
  "name": z.string().describe("The name of the custom field"),
  "slug": z.string().optional(),
  "type": z.literal("text").describe("The type of the custom field")
}