import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The office's id."),
  "address": z.string().nullable().describe("[single-line only]\n\nLine 1 of the new E911 address."),
  "address2": z.string().nullable().describe("[single-line only]\n\nLine 2 of the new E911 address.").optional(),
  "city": z.string().nullable().describe("[single-line only]\n\nCity of the new E911 address."),
  "country": z.string().nullable().describe("Country of the new E911 address."),
  "state": z.string().nullable().describe("[single-line only]\n\nState or Province of the new E911 address."),
  "update_all": z.boolean().nullable().describe("Update E911 for all users in this office.").optional(),
  "use_validated_option": z.boolean().nullable().describe("Whether to use the validated address option from our service.").optional(),
  "zip": z.string().nullable().describe("[single-line only]\n\nZip code of the new E911 address.")
}