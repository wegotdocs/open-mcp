import { z } from "zod"

export const inputParamsSchema = {
  "customId": z.string(),
  "companyId": z.string()
}