import { z } from "zod"

export const inputParamsSchema = {
  "templateId": z.string(),
  "businessId": z.string()
}