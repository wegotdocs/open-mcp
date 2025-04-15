import { z } from "zod"

export const inputParamsSchema = {
  "city": z.string().nullable().describe("The full city name"),
  "region": z.string().nullable().describe("The region or state. In API versions 2018-05-22 and earlier, this field is called `state`.\nExample: `\"NC\"`"),
  "street": z.string().describe("The full street address\nExample: `\"564 Main Street, APT 15\"`"),
  "postal_code": z.string().nullable().describe("The postal code. In API versions 2018-05-22 and earlier, this field is called `zip`."),
  "country": z.string().nullable().describe("The ISO 3166-1 alpha-2 country code")
}