import { z } from "zod"

export const inputParamsSchema = {
  "city": z.string().describe("The full city name").optional(),
  "region": z.string().nullable().describe("The region or state\nExample: `\"NC\"`").optional(),
  "street": z.string().describe("The full street address\nExample: `\"564 Main Street, APT 15\"`").optional(),
  "postal_code": z.string().nullable().describe("The postal code").optional(),
  "country": z.string().nullable().describe("The ISO 3166-1 alpha-2 country code").optional()
}