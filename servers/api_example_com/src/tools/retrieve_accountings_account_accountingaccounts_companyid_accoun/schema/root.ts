import { z } from "zod"

export const inputParamsSchema = {
  "accountingCode": z.string(),
  "companyId": z.string()
}