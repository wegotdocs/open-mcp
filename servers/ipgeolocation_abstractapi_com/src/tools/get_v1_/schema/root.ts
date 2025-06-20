import { z } from "zod"

export const inputParamsSchema = {
  "api_key": z.string(),
  "ip_address": z.string().optional(),
  "fields": z.string().optional()
}