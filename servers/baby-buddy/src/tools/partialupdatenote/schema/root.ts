import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique integer value identifying this Note."),
  "child": z.string().describe("child").optional(),
  "date": z.string().describe("DateTime").optional(),
  "date_max": z.string().describe("Max. DateTime").optional(),
  "date_min": z.string().describe("Min. DateTime").optional(),
  "tags": z.string().describe("tag").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional(),
  "b_id": z.number().int().readonly().optional(),
  "b_child": z.number().int(),
  "note": z.string(),
  "image": z.string().base64().nullable().optional(),
  "time": z.string().datetime({ offset: true }).optional(),
  "b_tags": z.array(z.string()).optional()
}