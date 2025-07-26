import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this note_ type."),
  "name": z.string().min(1).max(100).optional(),
  "description": z.string().min(1).max(200).optional(),
  "is_single": z.boolean().optional(),
  "is_active": z.boolean().optional(),
  "is_mandatory": z.boolean().optional()
}