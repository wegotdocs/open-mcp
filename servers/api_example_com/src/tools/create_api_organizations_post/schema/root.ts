import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "parent_id": z.union([z.number().int(), z.null()]).optional()
}