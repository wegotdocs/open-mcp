import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this notes."),
  "entry": z.string().min(1),
  "private": z.boolean().optional(),
  "edited": z.boolean().optional()
}