import { z } from "zod"

export const inputParams = {
  "contract_id": z.string().uuid().optional(),
  "contract_address": z.string().optional(),
  "caller": z.string(),
  "limit": z.number().int().optional(),
  "offset": z.number().int().optional(),
  "show_expired": z.boolean().optional(),
  "live_after": z.number().int().optional(),
  "authorization": z.string().optional()
}