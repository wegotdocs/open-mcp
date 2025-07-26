import { z } from "zod"

export const inputParamsSchema = {
  "test": z.number().int(),
  "title": z.string().min(1).max(1000),
  "date": z.string().date().optional(),
  "severity": z.string().max(200).nullable().optional(),
  "description": z.string().nullable().optional()
}