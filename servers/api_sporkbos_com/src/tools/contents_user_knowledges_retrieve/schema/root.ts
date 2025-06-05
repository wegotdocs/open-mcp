import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "team": z.number().int()
}