import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "id": z.string()
}