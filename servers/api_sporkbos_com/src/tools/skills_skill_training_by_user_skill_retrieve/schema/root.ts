import { z } from "zod"

export const inputParamsSchema = {
  "skill": z.number().int(),
  "user": z.number().int()
}