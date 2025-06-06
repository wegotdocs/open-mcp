import { z } from "zod"

export const inputParamsSchema = {
  "subareaId": z.number().int()
}