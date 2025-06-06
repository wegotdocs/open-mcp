import { z } from "zod"

export const inputParamsSchema = {
  "currency": z.string().describe("ISO4217 currency code.")
}