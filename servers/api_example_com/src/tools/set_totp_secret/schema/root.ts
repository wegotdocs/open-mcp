import { z } from "zod"

export const inputParamsSchema = {
  "code": z.number().int(),
  "secret": z.string()
}