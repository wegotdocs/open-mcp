import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.number().int(),
  "amount": z.number().int(),
  "position": z.number().int().optional(),
  "visibility": z.enum(["all","members","admin","self"]).optional(),
  "is_private": z.boolean().optional()
}