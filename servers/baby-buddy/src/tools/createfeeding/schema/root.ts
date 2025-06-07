import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "child": z.number().int().nullable().describe("Required unless a Timer value is provided.").optional(),
  "start": z.string().datetime({ offset: true }).describe("Required unless a Timer value is provided.").optional(),
  "end": z.string().datetime({ offset: true }).describe("Required unless a Timer value is provided.").optional(),
  "timer": z.number().int().nullable().describe("May be used in place of the Start, End, and/or Child values.").optional(),
  "duration": z.string().nullable().readonly().optional(),
  "type": z.enum(["breast milk","formula","fortified breast milk","solid food"]),
  "method": z.enum(["bottle","left breast","right breast","both breasts","parent fed","self fed"]),
  "amount": z.number().nullable().optional(),
  "notes": z.string().nullable().optional(),
  "tags": z.array(z.string()).optional()
}