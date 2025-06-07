import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique integer value identifying this Diaper Change."),
  "amount": z.string().describe("amount").optional(),
  "child": z.string().describe("child").optional(),
  "color": z.enum(["black","brown","green","yellow"]).describe("color").optional(),
  "date": z.string().describe("DateTime").optional(),
  "date_max": z.string().describe("Max. DateTime").optional(),
  "date_min": z.string().describe("Min. DateTime").optional(),
  "solid": z.string().describe("solid").optional(),
  "wet": z.string().describe("wet").optional(),
  "tags": z.string().describe("tag").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional(),
  "b_id": z.number().int().readonly().optional(),
  "b_child": z.number().int(),
  "time": z.string().datetime({ offset: true }).optional(),
  "b_wet": z.boolean(),
  "b_solid": z.boolean(),
  "b_color": z.enum(["black","brown","green","yellow"]).optional(),
  "b_amount": z.number().nullable().optional(),
  "notes": z.string().nullable().optional(),
  "b_tags": z.array(z.string()).optional()
}