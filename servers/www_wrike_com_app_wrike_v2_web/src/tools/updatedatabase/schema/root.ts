import { z } from "zod"

export const inputParamsSchema = {
  "databaseId": z.string(),
  "title": z.string().optional(),
  "parentFolderId": z.string().optional()
}