import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "type": z.string().optional()
}