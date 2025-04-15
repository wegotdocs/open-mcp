import { z } from "zod"

export const inputParamsSchema = {
  "utmSource": z.string().describe("UTM source").optional(),
  "utmMedium": z.string().describe("UTM medium").optional(),
  "utmCampaign": z.string().describe("UTM campaign").optional(),
  "utmTerm": z.string().describe("UTM term").optional()
}