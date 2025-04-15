import { z } from "zod"

export const inputParamsSchema = {
  "iso_currency_code": z.enum(["GBP","EUR"]).describe("An ISO-4217 currency code, used with e-wallets and transactions."),
  "value": z.number().gte(0.01).describe("The amount of the transaction. Must contain at most two digits of precision e.g. `1.23`.")
}