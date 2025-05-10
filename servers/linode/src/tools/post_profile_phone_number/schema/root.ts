import { z } from "zod"

export const inputParams = {
  "iso_code": z.string().describe("The two-letter ISO 3166 country code associated with the phone number."),
  "phone_number": z.string().describe("A valid phone number.")
}