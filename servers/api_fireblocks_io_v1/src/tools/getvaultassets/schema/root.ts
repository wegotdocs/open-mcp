import { z } from "zod"

export const inputParamsSchema = {
  "accountNamePrefix": z.string().optional(),
  "accountNameSuffix": z.string().optional()
}