import { z } from "zod"

export const inputParamsSchema = {
  "all": z.boolean().optional(),
  "keymanager": z.boolean().optional(),
  "ssl": z.boolean().optional(),
  "sslctx": z.boolean().optional(),
  "trustmanager": z.boolean().optional()
}