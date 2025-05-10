import { z } from "zod"

export const inputParamsSchema = {
  "city": z.string().describe("The full city name."),
  "country": z.string().describe("Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form."),
  "postal_code": z.string().describe("The postal code of the address."),
  "region": z.string().describe("An ISO 3166-2 subdivision code.\nRelated terms would be \"state\", \"province\", \"prefecture\", \"zone\", \"subdivision\", etc."),
  "street": z.string().describe("The primary street portion of an address. A string with at least one non-whitespace alphabetical character, with a max length of 80 characters."),
  "street2": z.string().describe("Extra street information, like an apartment or suite number. If provided, a string with at least one non-whitespace character, with a max length of 50 characters.").optional()
}