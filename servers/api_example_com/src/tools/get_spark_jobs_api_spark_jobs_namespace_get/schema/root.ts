import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "include_history": z.boolean().optional()
}