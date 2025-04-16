import { z } from "zod"

export const inputParamsSchema = {
  "folder": z.string().optional(),
  "downloadId": z.string().optional(),
  "movieId": z.number().int().optional(),
  "filterExistingFiles": z.boolean().optional()
}