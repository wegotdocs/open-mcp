import { z } from "zod"

export const inputParamsSchema = {
  "webLeadId": z.number().int(),
  "contact": z.number().int()
}