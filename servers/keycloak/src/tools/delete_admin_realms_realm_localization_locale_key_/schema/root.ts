import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string(),
  "locale": z.string()
}