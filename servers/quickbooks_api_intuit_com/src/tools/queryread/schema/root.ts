import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "query": z.string().optional()
}