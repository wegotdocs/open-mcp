import { z } from "zod"

export const inputParamsSchema = {
  "Id": z.string().optional(),
  "SyncToken": z.string().optional()
}