import { z } from "zod"

export const inputParamsSchema = {
  "checklistTemplateIds": z.string().optional(),
  "checklistTemplateName": z.string().optional(),
  "required": z.boolean().optional(),
  "includeArchived": z.boolean().optional()
}