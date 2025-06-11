import { z } from "zod"

export const inputParamsSchema = {
  "folderId": z.number().int(),
  "includeArchived": z.boolean().optional()
}