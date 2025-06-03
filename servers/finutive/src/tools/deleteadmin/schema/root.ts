import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "adminId": z.string()
}