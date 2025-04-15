import { z } from "zod"

export const inputParamsSchema = {
  "client_user_id": z.string().nullable().describe("An identifier you determine and submit for the user. If using the Credit Dashboard, Customers should pass in the `user_token` created in `/user/create`.").optional(),
  "first_name": z.string().nullable().describe("The user's first name. Required for the Fannie Mae Day 1 Certainty™ program.").optional(),
  "middle_name": z.string().nullable().describe("The user's middle name").optional(),
  "last_name": z.string().nullable().describe("The user's last name.  Required for the Fannie Mae Day 1 Certainty™ program.").optional(),
  "ssn": z.string().nullable().describe("The user's Social Security Number. Required for the Fannie Mae Day 1 Certainty™ program.\n\nFormat: \"ddd-dd-dddd\"").optional(),
  "phone_number": z.string().nullable().describe("The user's phone number, in E.164 format: +{countrycode}{number}. For example: \"+14151234567\". Phone numbers provided in other formats will be parsed on a best-effort basis.").optional(),
  "email": z.string().nullable().describe("The user's email address.").optional()
}