import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.number().int(),
  "hash": z.string(),
  "expires": z.string(),
  "type": z.string(),
  "signature": z.string()
}