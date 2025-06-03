import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "manual": z.boolean().optional()
}