import { z } from "zod"

export const inputParamsSchema = {
  "street": z.string().describe("The street number and name (i.e., \"100 Market St.\").").optional(),
  "city": z.string().describe("Ex. \"San Francisco\"").optional(),
  "region": z.string().describe("The state or province (e.g., \"CA\").").optional(),
  "postal_code": z.string().describe("The postal code (e.g., \"94103\").").optional(),
  "country": z.string().describe("A two-letter country code (e.g., \"US\").").optional()
}