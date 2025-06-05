import { z } from "zod"

export const inputParamsSchema = {
  "team": z.number().int(),
  "file": z.string().url()
}