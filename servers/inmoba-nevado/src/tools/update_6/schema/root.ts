import { z } from "zod"

export const inputParamsSchema = {
  "contactId": z.number().int(),
  "fileId": z.number().int(),
  "name": z.string(),
  "description": z.string().nullable().optional()
}