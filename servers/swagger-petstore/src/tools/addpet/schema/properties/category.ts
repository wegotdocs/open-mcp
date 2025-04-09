import { z } from "zod"

export const inputParams = {
  "id": z.number().int().optional(),
  "name": z.string().optional()
}