import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique integer value identifying this Feeding."),
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
  "ordering": z.string().describe("Which field to use when ordering the results.").optional(),
  "b_id": z.number().int().readonly().optional(),
  "b_child": z.number().int().nullable().describe("Required unless a Timer value is provided.").optional(),
  "b_start": z.string().datetime({ offset: true }).describe("Required unless a Timer value is provided.").optional(),
  "b_end": z.string().datetime({ offset: true }).describe("Required unless a Timer value is provided.").optional(),
  "timer": z.number().int().nullable().describe("May be used in place of the Start, End, and/or Child values.").optional(),
  "duration": z.string().nullable().readonly().optional(),
  "b_type": z.enum(["breast milk","formula","fortified breast milk","solid food"]),
  "b_method": z.enum(["bottle","left breast","right breast","both breasts","parent fed","self fed"]),
  "amount": z.number().nullable().optional(),
  "notes": z.string().nullable().optional(),
  "b_tags": z.array(z.string()).optional()
}