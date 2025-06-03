import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "name": z.string().optional(),
  "cif": z.string().optional(),
  "size": z.number().int().optional(),
  "offset": z.number().int().optional()
}