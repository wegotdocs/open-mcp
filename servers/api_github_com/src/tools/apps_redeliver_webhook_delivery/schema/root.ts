import { z } from "zod"

export const inputParamsSchema = {
  "delivery_id": z.number().int()
}