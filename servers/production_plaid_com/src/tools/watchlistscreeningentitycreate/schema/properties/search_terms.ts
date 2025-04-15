import { z } from "zod"

export const inputParamsSchema = {
  "entity_watchlist_program_id": z.string().describe("ID of the associated entity program."),
  "legal_name": z.string().describe("The name of the organization being screened. Must have at least one alphabetical character, have a maximum length of 100 characters, and not include leading or trailing spaces."),
  "document_number": z.string().nullable().describe("The numeric or alphanumeric identifier associated with this document. Must be between 4 and 32 characters long, and cannot have leading or trailing spaces.").optional(),
  "email_address": z.string().email().nullable().describe("A valid email address. Must not have leading or trailing spaces and address must be RFC compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).").optional(),
  "country": z.string().nullable().describe("Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.").optional(),
  "phone_number": z.string().nullable().describe("A phone number in E.164 format.").optional(),
  "url": z.string().url().nullable().describe("An 'http' or 'https' URL (must begin with either of those).").optional()
}