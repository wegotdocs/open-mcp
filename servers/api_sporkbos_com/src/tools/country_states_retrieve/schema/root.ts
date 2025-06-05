import { z } from "zod"

export const inputParamsSchema = {
  "country": z.string().describe("Filter notifications by country iso2 code")
}