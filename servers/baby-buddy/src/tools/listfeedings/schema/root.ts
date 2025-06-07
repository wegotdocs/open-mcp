import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "child": z.string().describe("child").optional(),
  "end": z.string().describe("End DateTime").optional(),
  "end_max": z.string().describe("Max. End DateTime").optional(),
  "end_min": z.string().describe("Min. End DateTime").optional(),
  "method": z.enum(["bottle","left breast","right breast","both breasts","parent fed","self fed"]).describe("method").optional(),
  "start": z.string().describe("Start DateTime").optional(),
  "start_max": z.string().describe("Max. End DateTime").optional(),
  "start_min": z.string().describe("Min. Start DateTime").optional(),
  "type": z.enum(["breast milk","formula","fortified breast milk","solid food"]).describe("type").optional(),
  "tags": z.string().describe("tag").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional()
}