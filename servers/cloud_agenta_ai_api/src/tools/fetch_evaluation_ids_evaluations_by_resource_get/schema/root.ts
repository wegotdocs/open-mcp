import { z } from "zod"

export const inputParams = {
  "resource_type": z.string(),
  "resource_ids": z.array(z.string()).optional()
}