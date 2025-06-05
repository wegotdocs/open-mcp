import { z } from "zod"

export const inputParamsSchema = {
  "traff": z.number().int().describe("filter results match exact given traffic value ").optional(),
  "traff_from": z.number().int().describe("filters results that exceed given traffic value").optional(),
  "traff_to": z.number().int().describe("filter results that bellow given traffic value").optional(),
  "visible": z.number().int().describe("exact visibility value match").optional(),
  "visible_from": z.number().int().describe("filter results that exceed given visibility value").optional(),
  "visible_to": z.number().int().describe("filter results that bellow given visibility value").optional()
}