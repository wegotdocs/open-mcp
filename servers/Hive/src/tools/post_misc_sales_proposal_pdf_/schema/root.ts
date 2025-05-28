import { z } from "zod"

export const inputParamsSchema = {
  "Content-Type": z.string().optional(),
  "Accept": z.string().optional(),
  "Authorization": z.string().optional(),
  "": z.string().optional()
}