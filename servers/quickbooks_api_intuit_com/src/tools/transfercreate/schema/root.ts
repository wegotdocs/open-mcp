import { z } from "zod"

export const inputParamsSchema = {
  "operation": z.string().optional(),
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}