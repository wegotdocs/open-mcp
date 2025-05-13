import { z } from "zod"

export const inputParamsSchema = {
  "country": z.string().optional(),
  "province": z.string().optional(),
  "city": z.string().optional(),
  "district": z.string().optional(),
  "address": z.string().optional()
}