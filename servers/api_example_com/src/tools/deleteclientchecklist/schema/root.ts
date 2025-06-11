import { z } from "zod"

export const inputParamsSchema = {
  "checklistId": z.number().int()
}