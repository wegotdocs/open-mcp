import { z } from "zod"

export const inputParamsSchema = {
  "size": z.number().int().optional(),
  "offset": z.number().int().optional(),
  "only_contracts": z.number().int().optional(),
  "only_users": z.number().int().optional(),
  "get_historic": z.number().int().optional()
}