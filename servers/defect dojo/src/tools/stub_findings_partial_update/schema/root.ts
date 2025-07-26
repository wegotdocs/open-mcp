import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this stub_ finding."),
  "title": z.string().min(1).max(1000).optional(),
  "date": z.string().date().optional(),
  "severity": z.string().max(200).nullable().optional(),
  "description": z.string().nullable().optional()
}