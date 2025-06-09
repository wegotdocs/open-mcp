import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "operationID": z.number().int()
}