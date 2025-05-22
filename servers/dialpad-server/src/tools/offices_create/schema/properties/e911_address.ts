import { z } from "zod"

export const inputParamsSchema = {
  "address": z.string().nullable().describe("[single-line only]\n\nLine 1 of the E911 address."),
  "address2": z.string().nullable().describe("[single-line only]\n\nLine 2 of the E911 address.").optional(),
  "city": z.string().nullable().describe("[single-line only]\n\nCity of the E911 address."),
  "country": z.string().nullable().describe("Country of the E911 address."),
  "state": z.string().nullable().describe("[single-line only]\n\nState or Province of the E911 address."),
  "zip": z.string().nullable().describe("[single-line only]\n\nZip code of the E911 address.")
}