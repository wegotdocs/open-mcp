import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique integer value identifying this Pumping."),
  "child": z.string().describe("child").optional(),
  "end": z.string().describe("End DateTime").optional(),
  "end_max": z.string().describe("Max. End DateTime").optional(),
  "end_min": z.string().describe("Min. End DateTime").optional(),
  "start": z.string().describe("Start DateTime").optional(),
  "start_max": z.string().describe("Max. End DateTime").optional(),
  "start_min": z.string().describe("Min. Start DateTime").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional()
}