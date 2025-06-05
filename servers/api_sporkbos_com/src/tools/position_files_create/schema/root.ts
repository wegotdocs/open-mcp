import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly(),
  "file": z.string().url(),
  "position": z.number().int().readonly(),
  "name": z.string().max(255).optional(),
  "size": z.string().readonly()
}