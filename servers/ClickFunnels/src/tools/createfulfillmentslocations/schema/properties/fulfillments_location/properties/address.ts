import { z } from "zod"

export const inputParamsSchema = {
  "address_one": z.string().describe("The first line of the address").optional(),
  "address_two": z.string().describe("The second line of the address").optional(),
  "city": z.string().describe("The city").optional(),
  "region": z.string().describe("The state or province").optional(),
  "country": z.string().describe("The country (ISO2 code)").optional(),
  "postal_code": z.string().describe("The postal code").optional()
}