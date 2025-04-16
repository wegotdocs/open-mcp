import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string().optional(),
  "includeFiles": z.boolean().optional(),
  "allowFoldersWithoutTrailingSlashes": z.boolean().optional()
}