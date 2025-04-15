import { z } from "zod"

export const inputParamsSchema = {
  "firstdetect": z.union([z.literal(3), z.literal(null)]).nullable().describe("The version of Prism FirstDetect. If not specified, will default to v3.").optional(),
  "cashscore": z.union([z.literal("3_lite"), z.literal(3), z.literal(null)]).nullable().describe("The version of Prism CashScore. If not specified, will default to v3.").optional(),
  "insights": z.union([z.literal(3), z.literal(null)]).nullable().describe("The version of Prism Insights. If not specified, will default to v3.").optional()
}