import { z } from "zod"

export const inputParamsSchema = {
  "public": z.boolean(),
  "body": z.string().nullable().optional(),
  "htmlBody": z.string().nullable().optional(),
  "timeTracked": z.number().int().nullable().describe("time in seconds").optional(),
  "duplicateInIncidents": z.boolean().optional()
}