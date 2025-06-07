import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique integer value identifying this Head Circumference."),
  "child": z.string().describe("child").optional(),
  "date": z.string().describe("date").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional(),
  "b_id": z.number().int().readonly().optional(),
  "b_child": z.number().int(),
  "head_circumference": z.number(),
  "b_date": z.string().date().optional(),
  "notes": z.string().nullable().optional(),
  "tags": z.array(z.string()).optional()
}