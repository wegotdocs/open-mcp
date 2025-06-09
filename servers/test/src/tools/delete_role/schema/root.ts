import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "id": z.number().int()
}