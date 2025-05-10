import { z } from "zod"

export const inputParamsSchema = {
  "street": z.array(z.string().min(1)).min(1).describe("An array of length 1-2 representing the street address where the recipient is located. Maximum of 70 characters."),
  "city": z.string().min(1).max(35).describe("The city where the recipient is located. Maximum of 35 characters."),
  "postal_code": z.string().min(1).max(16).describe("The postal code where the recipient is located. Maximum of 16 characters."),
  "country": z.string().min(2).max(2).describe("The ISO 3166-1 alpha-2 country code where the recipient is located.")
}