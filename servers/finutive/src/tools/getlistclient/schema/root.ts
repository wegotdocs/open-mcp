import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "text": z.string().optional(),
  "type": z.string().optional(),
  "cif": z.string().optional(),
  "size": z.number().int().optional(),
  "offset": z.number().int().optional(),
  "searchInGlobal": z.boolean().optional()
}