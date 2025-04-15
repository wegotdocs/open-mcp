import { z } from "zod"

export const inputParams = {
  "name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional()
}