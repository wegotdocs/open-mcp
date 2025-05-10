import { z } from "zod"

export const inputParamsSchema = {
  "street": z.string().nullable().describe("The primary street portion of an address. If an address is provided, this field will always be filled. A string with at least one non-whitespace alphabetical character, with a max length of 80 characters.").optional(),
  "street2": z.string().nullable().describe("Extra street information, like an apartment or suite number. If provided, a string with at least one non-whitespace character, with a max length of 50 characters.").optional(),
  "city": z.string().nullable().describe("City from the end user's address. A string with at least one non-whitespace alphabetical character, with a max length of 100 characters.\"").optional(),
  "region": z.string().nullable().describe("An ISO 3166-2 subdivision code. Related terms would be \"state\", \"province\", \"prefecture\", \"zone\", \"subdivision\", etc.").optional(),
  "postal_code": z.string().nullable().describe("The postal code for the associated address. Between 2 and 10 alphanumeric characters. For US-based addresses this must be 5 numeric digits.").optional(),
  "country": z.string().describe("Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.")
}