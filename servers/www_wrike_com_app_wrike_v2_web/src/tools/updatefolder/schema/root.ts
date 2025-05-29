import { z } from "zod"

export const inputParamsSchema = {
  "folderId": z.string(),
  "title": z.string().optional(),
  "parentFolderId": z.string().optional()
}