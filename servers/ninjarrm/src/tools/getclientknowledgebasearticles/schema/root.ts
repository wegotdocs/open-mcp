import { z } from "zod"

export const inputParamsSchema = {
  "organizationIds": z.string().optional(),
  "articleName": z.string().optional(),
  "includeArchived": z.boolean().optional()
}