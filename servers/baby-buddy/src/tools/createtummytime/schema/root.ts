import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "child": z.number().int().nullable().describe("Required unless a Timer value is provided.").optional(),
  "start": z.string().datetime({ offset: true }).describe("Required unless a Timer value is provided.").optional(),
  "end": z.string().datetime({ offset: true }).describe("Required unless a Timer value is provided.").optional(),
  "timer": z.number().int().nullable().describe("May be used in place of the Start, End, and/or Child values.").optional(),
  "duration": z.string().nullable().readonly().optional(),
  "milestone": z.string().max(255).optional(),
  "tags": z.array(z.string()).optional()
}