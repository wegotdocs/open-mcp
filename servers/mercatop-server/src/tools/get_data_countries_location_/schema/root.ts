import { z } from "zod"

export const inputParamsSchema = {
  "location": z.string().describe("ISO3166 alpha-2 country code.")
}