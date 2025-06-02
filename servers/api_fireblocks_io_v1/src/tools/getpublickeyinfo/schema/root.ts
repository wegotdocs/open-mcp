import { z } from "zod"

export const inputParamsSchema = {
  "derivationPath": z.string(),
  "algorithm": z.string(),
  "compressed": z.boolean().optional()
}