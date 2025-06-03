import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "invoiceId": z.string(),
  "is_official": z.enum(["TICKET","OFFICIAL","SIMPLE"]).optional()
}