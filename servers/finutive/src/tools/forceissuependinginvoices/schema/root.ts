import { z } from "zod"

export const inputParamsSchema = {
  "pendingDate": z.string().date()
}