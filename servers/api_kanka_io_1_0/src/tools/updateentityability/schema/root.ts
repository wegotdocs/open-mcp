import { z } from "zod"

export const inputParamsSchema = {
  "ability_id": z.number().int(),
  "charges": z.number().int().nullable().optional(),
  "note": z.string().nullable().optional(),
  "position": z.number().int().optional(),
  "visibility": z.enum(["all","members","admin","self"]).optional()
}