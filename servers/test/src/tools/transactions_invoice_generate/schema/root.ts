import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "operationId": z.number().int()
}