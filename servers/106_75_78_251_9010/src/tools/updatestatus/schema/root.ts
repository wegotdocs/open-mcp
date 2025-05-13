import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.number().int(),
  "status": z.number().int()
}