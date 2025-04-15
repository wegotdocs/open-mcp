import { z } from "zod"

export const inputParamsSchema = {
  "city": z.string().describe("The full city name."),
  "street": z.string().describe("The full street address."),
  "region": z.string().describe("The two-letter code for the state or province (e.g., \"CA\")."),
  "postal_code": z.string().describe("The postal code (e.g., \"94103\")."),
  "country_code": z.string().describe("ISO-3166-1 alpha-2 country code standard.")
}