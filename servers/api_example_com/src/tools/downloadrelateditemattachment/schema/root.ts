import { z } from "zod"

export const inputParamsSchema = {
  "relatedItemId": z.number().int()
}