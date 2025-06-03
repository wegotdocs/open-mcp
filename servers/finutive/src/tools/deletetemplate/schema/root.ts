import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "templateId": z.string()
}