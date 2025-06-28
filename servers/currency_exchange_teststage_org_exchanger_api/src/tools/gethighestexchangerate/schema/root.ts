import { z } from "zod"

export const inputParamsSchema = {
  "currency": z.string().describe("Currency code to retrieve the highest exchange rate for")
}