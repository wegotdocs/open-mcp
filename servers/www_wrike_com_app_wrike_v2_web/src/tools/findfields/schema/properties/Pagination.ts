import { z } from "zod"

export const inputParamsSchema = {
  "nextPageToken": z.string().optional(),
  "limit": z.number().int().gte(1).lte(1000).optional()
}