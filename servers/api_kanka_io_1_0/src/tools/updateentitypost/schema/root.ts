import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "entry": z.string(),
  "visibility": z.enum(["all","members","admin","self"]).optional(),
  "position": z.number().int().optional(),
  "is_private": z.boolean().optional()
}