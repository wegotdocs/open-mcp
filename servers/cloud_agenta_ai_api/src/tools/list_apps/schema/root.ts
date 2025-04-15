import { z } from "zod"

export const inputParams = {
  "app_name": z.union([z.string(), z.null()]).optional()
}