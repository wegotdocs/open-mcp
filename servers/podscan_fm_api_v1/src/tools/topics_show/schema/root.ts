import { z } from "zod"

export const inputParams = {
  "topic": z.string(),
  "with_history": z.boolean().optional()
}