import { z } from "zod"

export const inputParamsSchema = {
  "target": z.string().max(255).nullable(),
  "weight": z.number().int().nullable(),
  "port": z.number().int().nullable(),
  "priority": z.number().int().nullable()
}