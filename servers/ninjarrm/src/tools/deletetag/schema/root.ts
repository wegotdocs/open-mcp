import { z } from "zod"

export const inputParamsSchema = {
  "tagId": z.number().int()
}