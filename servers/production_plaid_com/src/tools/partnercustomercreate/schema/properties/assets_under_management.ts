import { z } from "zod"

export const inputParamsSchema = {
  "amount": z.number(),
  "iso_currency_code": z.string()
}