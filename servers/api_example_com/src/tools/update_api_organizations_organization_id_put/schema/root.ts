import { z } from "zod"

export const inputParamsSchema = {
  "organization_id": z.number().int(),
  "name": z.string(),
  "parent_id": z.union([z.number().int(), z.null()]).optional()
}