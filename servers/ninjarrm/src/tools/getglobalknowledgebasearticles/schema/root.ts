import { z } from "zod"

export const inputParamsSchema = {
  "articleName": z.string().optional(),
  "includeArchived": z.boolean().optional()
}