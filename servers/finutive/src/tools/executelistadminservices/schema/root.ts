import { z } from "zod"

export const inputParamsSchema = {
  "no_filter": z.number().int().optional(),
  "tag": z.string().optional()
}