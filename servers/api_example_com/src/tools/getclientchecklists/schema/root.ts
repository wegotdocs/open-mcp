import { z } from "zod"

export const inputParamsSchema = {
  "checklistIds": z.string().optional(),
  "organizationIds": z.string().optional(),
  "checklistName": z.string().optional(),
  "assignedToUserId": z.number().int().optional(),
  "completed": z.boolean().optional(),
  "required": z.boolean().optional(),
  "includeArchived": z.boolean().optional()
}