import { z } from "zod"

export const inputParams = {
  "podcasts": z.union([z.array(z.string()), z.null()]).optional(),
  "categories": z.union([z.array(z.string()), z.null()]).optional()
}