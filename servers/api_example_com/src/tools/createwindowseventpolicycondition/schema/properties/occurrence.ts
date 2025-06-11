import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().describe("Occurrence enabled").optional(),
  "threshold": z.number().int().describe("Occurrence threshold").optional(),
  "duration": z.number().int().describe("Occurrence duration").optional()
}