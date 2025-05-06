import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.union([z.string(), z.null()]).optional(),
  "version": z.union([z.number().int(), z.null()]).optional(),
  "commit_message": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional()
}