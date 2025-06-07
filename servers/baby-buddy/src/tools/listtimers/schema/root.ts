import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "child": z.string().describe("child").optional(),
  "end": z.string().describe("End DateTime").optional(),
  "end_max": z.string().describe("Max. End DateTime").optional(),
  "end_min": z.string().describe("Min. End DateTime").optional(),
  "name": z.string().describe("name").optional(),
  "start": z.string().describe("Start DateTime").optional(),
  "start_max": z.string().describe("Max. End DateTime").optional(),
  "start_min": z.string().describe("Min. Start DateTime").optional(),
  "user": z.string().describe("user").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional()
}