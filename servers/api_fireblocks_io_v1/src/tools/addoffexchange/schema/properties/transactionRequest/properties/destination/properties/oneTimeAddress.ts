import { z } from "zod"

export const inputParamsSchema = {
  "address": z.string(),
  "tag": z.string().optional()
}