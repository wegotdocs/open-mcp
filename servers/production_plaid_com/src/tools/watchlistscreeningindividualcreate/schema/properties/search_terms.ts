import { z } from "zod"

export const inputParamsSchema = {
  "watchlist_program_id": z.string().describe("ID of the associated program."),
  "legal_name": z.string().describe("The legal name of the individual being screened. Must have at least one alphabetical character, have a maximum length of 100 characters, and not include leading or trailing spaces."),
  "date_of_birth": z.string().date().describe("A date in the format YYYY-MM-DD (RFC 3339 Section 5.6).").optional(),
  "document_number": z.string().describe("The numeric or alphanumeric identifier associated with this document. Must be between 4 and 32 characters long, and cannot have leading or trailing spaces.").optional(),
  "country": z.string().describe("Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.").optional()
}