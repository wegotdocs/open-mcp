import { z } from "zod"

export const inputParamsSchema = {
  "briefRepresentation": z.boolean().describe("Boolean which defines whether brief groups representations are returned or not (default: false)").optional(),
  "exact": z.boolean().describe("Boolean which defines whether the params \"search\" must match exactly or not").optional(),
  "first": z.number().int().describe("The position of the first result to be returned (pagination offset).").optional(),
  "max": z.number().int().describe("The maximum number of results that are to be returned. Defaults to 10").optional(),
  "search": z.string().describe("A String representing either an exact group name or a partial name").optional()
}