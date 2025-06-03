import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "type": z.string(),
  "export_type": z.string(),
  "ids": z.array(z.string())
}