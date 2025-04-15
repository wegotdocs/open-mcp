import { z } from "zod"

export const inputParamsSchema = {
  "legal_name": z.string().describe("The account holder’s full legal name. If the transfer `ach_class` is `ccd`, this should be the business name of the account holder."),
  "email_address": z.string().nullable().describe("The account holder’s email.").optional(),
  "routing_number": z.string().describe("The account holder's routing number. This field is only used in response data. Do not provide this field when making requests.").readonly().optional()
}