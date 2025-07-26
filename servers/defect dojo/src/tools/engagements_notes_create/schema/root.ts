import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this engagement."),
  "entry": z.string().min(1),
  "private": z.boolean().optional(),
  "note_type": z.number().int().nullable().optional()
}