import { z } from "zod"

export const inputParamsSchema = {
  "checklistTemplateId": z.number().int()
}