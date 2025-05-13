import { z } from "zod"

export const inputParamsSchema = {
  "entities": z.string().optional(),
  "changedSince": z.string().optional()
}