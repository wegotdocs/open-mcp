import { z } from "zod"

export const inputParamsSchema = {
  "currency": z.enum(["GBP","EUR","PLN","SEK","DKK","NOK"]).describe("The ISO-4217 currency code of the payment. For standing orders and payment consents, `\"GBP\"` must be used. For Poland, Denmark, Sweden and Norway, only the local currency is currently supported."),
  "value": z.number().describe("The amount of the payment. Must contain at most two digits of precision e.g. `1.23`. Minimum accepted value is `1`.")
}