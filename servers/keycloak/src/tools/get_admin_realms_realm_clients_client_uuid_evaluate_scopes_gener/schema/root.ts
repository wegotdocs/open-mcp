import { z } from "zod"

export const inputParams = {
  "scope": z.string().optional(),
  "userId": z.string().optional()
}