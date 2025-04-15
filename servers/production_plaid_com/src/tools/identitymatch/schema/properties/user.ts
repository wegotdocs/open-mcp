import { z } from "zod"

export const inputParamsSchema = {
  "legal_name": z.string().nullable().describe("The user's full legal name.").optional(),
  "phone_number": z.string().nullable().describe("The user's phone number, in E.164 format: +{countrycode}{number}. For example: \"+14157452130\". Phone numbers provided in other formats will be parsed on a best-effort basis. Phone number input is validated against valid number ranges; number strings that do not match a real-world phone numbering scheme may cause the request to fail, even in the Sandbox test environment.").optional(),
  "email_address": z.string().nullable().describe("The user's email address.").optional(),
  "address": z.string().optional()
}