import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.number().int()).nullable().optional(),
  "includeCustomFormatWhenRenaming": z.boolean().nullable().optional()
}