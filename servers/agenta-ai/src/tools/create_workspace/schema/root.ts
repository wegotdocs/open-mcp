import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "name": z.string(),
  "description": z.union([z.string(), z.null()]).optional(),
  "type": z.union([z.string(), z.null()]).optional()
}