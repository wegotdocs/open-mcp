import { z } from "zod"

export const inputParamsSchema = {
  "information_link": z.string().optional(),
  "user": z.string().optional()
}