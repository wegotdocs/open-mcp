import { z } from "zod"

export const inputParams = {
  "authorization": z.union([z.string(), z.null()]).optional()
}