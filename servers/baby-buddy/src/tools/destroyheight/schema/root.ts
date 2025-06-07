import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique integer value identifying this Height."),
  "child": z.string().describe("child").optional(),
  "date": z.string().describe("date").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional()
}