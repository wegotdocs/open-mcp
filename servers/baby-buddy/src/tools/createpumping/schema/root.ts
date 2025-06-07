import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "child": z.number().int().nullable().describe("Required unless a Timer value is provided.").optional(),
  "amount": z.number(),
  "start": z.string().datetime({ offset: true }).describe("Required unless a Timer value is provided.").optional(),
  "end": z.string().datetime({ offset: true }).describe("Required unless a Timer value is provided.").optional(),
  "duration": z.string().nullable().readonly().optional(),
  "notes": z.string().nullable().optional(),
  "tags": z.array(z.string()).optional(),
  "timer": z.number().int().nullable().describe("May be used in place of the Start, End, and/or Child values.").optional()
}