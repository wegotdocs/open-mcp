import { z } from "zod"

export const inputParams = {
  "org_id": z.string(),
  "name": z.string(),
  "description": z.union([z.string(), z.null()]).optional(),
  "type": z.union([z.string(), z.null()]).optional()
}