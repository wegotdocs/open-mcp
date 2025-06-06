import { z } from "zod"

export const inputParamsSchema = {
  "first_name": z.string().describe("First name.").optional(),
  "last_name": z.string().describe("Last name.").optional(),
  "company": z.string().describe("Company name.").optional(),
  "address_1": z.string().describe("Address line 1").optional(),
  "address_2": z.string().describe("Address line 2").optional(),
  "city": z.string().describe("City name.").optional(),
  "state": z.string().describe("ISO code or name of the state, province or district.").optional(),
  "postcode": z.string().describe("Postal code.").optional(),
  "country": z.string().describe("Country code in ISO 3166-1 alpha-2 format.").optional(),
  "email": z.string().email().describe("Email address.").optional(),
  "phone": z.string().describe("Phone number.").optional()
}