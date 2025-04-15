import { z } from "zod"

export const inputParamsSchema = {
  "city": z.string().optional(),
  "street": z.string().optional(),
  "region": z.string().optional(),
  "postal_code": z.string().optional(),
  "country_code": z.string().describe("ISO-3166-1 alpha-2 country code standard.").optional()
}