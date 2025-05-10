import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "tag": z.string().optional()
}